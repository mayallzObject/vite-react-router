import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => (
  <>
    <h1>Protected Routes</h1>
    <Outlet />
  </>
);

export default ProtectedLayout;
