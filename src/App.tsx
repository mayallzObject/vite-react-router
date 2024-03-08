import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import { privateRoutes, publicRoutes } from './routes';
import ProtectedLayout from './layouts/ProtectedLayout';

const router = createBrowserRouter([
  ...publicRoutes,
  {
    element: <ProtectedLayout />,
    children: [...privateRoutes],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
