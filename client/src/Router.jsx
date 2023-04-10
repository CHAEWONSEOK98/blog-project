import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Write from './pages/Write';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/write',
    element: <Write />,
  },
]);

export default router;
