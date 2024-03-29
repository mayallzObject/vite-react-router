import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
]);

const App = () => <RouterProvider router={router} />;

export default App;
