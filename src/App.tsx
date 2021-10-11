import './App.css';
import * as MazeService from './api/services/MazeService'
import PagePresenter from './pages/PagePresenter';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './infrastructure/material-ui/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <PagePresenter />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
