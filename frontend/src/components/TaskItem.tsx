import { Box, Checkbox, Typography, Button, Paper } from '@mui/material';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  dueDate: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem = ({ id, title, completed, dueDate, onToggle, onDelete }: TaskItemProps) => {
  
    // Check if due date is passed
  const dueDateObj = new Date(dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const isOverdue = dueDateObj < today && !completed;

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        marginBottom: 1,
        borderLeft: completed ? '5px solid green' : isOverdue ? '5px solid red' : '5px solid orange',
      }}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Checkbox
          checked={completed}
          onChange={() => onToggle(id)}
          sx={{ marginRight: 1 }}
        />
        <Box>
          <Typography
            variant="body1"
            sx={{
              textDecoration: completed ? 'line-through' : 'none',
              color: completed ? 'text.secondary' : 'text.primary',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: isOverdue ? 'error.main' : 'text.secondary' }}
          >
            Due: {dueDateObj.toLocaleDateString()}
            {isOverdue && !completed ? ' (Overdue)' : ''}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
    </Paper>
  );
};

export default TaskItem;
