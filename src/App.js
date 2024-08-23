import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <TodoApp />
      </Container>
    </>
  );
}

export default App;