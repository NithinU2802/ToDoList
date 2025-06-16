import React from 'react';
import {
  CssBaseline,
  Typography,
  Box,
  Paper,
  Container,
  Divider,
} from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f0f2f5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              borderRadius: 3,
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              📝 To-Do List Management
            </Typography>

            {/* Flexbox layout for left and right section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                marginTop: 4,
              }}
            >
              {/* Left: Task List */}
              <Box
                sx={{
                  flex: 2,
                  backgroundColor: '#fafafa',
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Task List
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <TaskList />
              </Box>

              {/* Right: Task Form */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: '#fefefe',
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Add New Task
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <TaskForm />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default App;
