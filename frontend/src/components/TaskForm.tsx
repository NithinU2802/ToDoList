import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createTask } from '../api';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const [errors, setErrors] = useState<{ title?: string; dueDate?: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = (fieldValues = task) => {
    let tempErrors: { title?: string; dueDate?: string } = { ...errors };

    if ('title' in fieldValues)
      tempErrors.title = fieldValues.title ? '' : 'Title is required.';

    if ('dueDate' in fieldValues) {
      if (!fieldValues.dueDate) {
        tempErrors.dueDate = 'Due date is required.';
        return
      } else if (!isFutureDate(fieldValues.dueDate)) {
        tempErrors.dueDate = 'Due date must be a future date.';
        return
      } else {
        tempErrors.dueDate = '';
      }
    }

    setErrors(tempErrors);

    setIsFormValid(
      fieldValues.title !== '' &&
      fieldValues.dueDate !== '' &&
      tempErrors.title === '' &&
      tempErrors.dueDate === ''
    );
  };

  // To check future date
  const isFutureDate = (dateStr: string) => {
    const selectedDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate > today;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validate(task);
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const now = new Date().toISOString();
    const payload = {
      ...task,
      status: 'PENDING',
      createdAt: now,
      updatedAt: now
    };

    try {
      await createTask(payload);
      setTask({ title: '', description: '', dueDate: '' });
      setErrors({});
      setIsFormValid(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  // Today's date 
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9'
      }}
      noValidate
    >
      <Typography variant="h6" gutterBottom align="center">
        Add New Task
      </Typography>

      <TextField
        label="Title"
        name="title"
        value={task.title}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        error={Boolean(errors.title)}
        helperText={errors.title}
      />

      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />

      <TextField
        label="Due Date"
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: todayStr }}
        error={Boolean(errors.dueDate)}
        helperText={errors.dueDate}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={!isFormValid}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
