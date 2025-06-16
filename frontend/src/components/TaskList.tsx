import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { fetchTasks, deleteTask, updateTask } from '../api';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  status: 'PENDING' | 'COMPLETED';
  dueDate: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTasks();
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, [tasks]);

  const handleToggle = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const updatedStatus = task.status === 'PENDING' ? 'COMPLETED' : 'PENDING';
    try {
      await updateTask(id, { ...task, status: updatedStatus });
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: updatedStatus } : t))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 700, margin: '0 auto', padding: 2 }}>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : tasks.length === 0 ? (
        <Typography variant="body1" color="text.secondary" align="center" mt={4}>
          No tasks available.
        </Typography>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.status === 'COMPLETED'}
            dueDate={task.dueDate}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))
      )}
    </Box>
  );
};

export default TaskList;
