import { Outlet } from 'react-router-dom';

export const ProtectedLayout = () => (
  <div className="profile-layout">
    <Outlet />
  </div>
);
