import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';

export const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export const privateRoutes = [
  {
    path: '/profile',
    element: <UserProfilePage />,
  },
];
