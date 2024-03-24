import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import(
            './pages/home/homepage.component'
          );
          return { Component: HomePage };
        },
      },
      {
        path: 'dashboard',
        async lazy() {
          const { DashboardPage } = await import(
            './pages/dashboard/dashboardpage.component'
          );
          return { Component: DashboardPage };
        },
      },
      {
        path: 'login',
        async lazy() {
          const { AuthLayout } = await import('./layouts/AuthLayout');
          return { Component: AuthLayout };
        },
        children: [
          {
            index: true,
            async lazy() {
              const { LoginPage } = await import(
                './pages/login/loginpage.component'
              );
              return { Component: LoginPage };
            },
          },
          {
            path: 'signup',
            async lazy() {
              const { SignupPage } = await import(
                './pages/signup/signuppage.component'
              );
              return { Component: SignupPage };
            },
          },
        ],
      },
    ],
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: 'profile',
    async lazy() {
      const { ProtectedLayout } = await import(
        './layouts/ProtectedLayout'
      );
      return { Component: ProtectedLayout };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { ProfilePage } = await import(
            './pages/profile/profilepage.components'
          );
          return { Component: ProfilePage };
        },
      },
    ],
  },
];
