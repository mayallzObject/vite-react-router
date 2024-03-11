import { Outlet } from 'react-router-dom';

export const ProtectedLayout = () => (
  <>
    <h1>Protected Routes</h1>
    <Outlet />
  </>
);
