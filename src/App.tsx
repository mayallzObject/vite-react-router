import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import { privateRoutes, publicRoutes } from './routes';

const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
]);

const App = () => <RouterProvider router={router} />;

export default App;
