import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext';
import { Home } from './pages/Home';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
