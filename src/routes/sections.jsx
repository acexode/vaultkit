import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const SharedDataPage = lazy(() => import('src/pages/shared-data-history'));
export const UserPage = lazy(() => import('src/pages/user'));
export const FormPage = lazy(() => import('src/pages/form'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const AnalyticsPage = lazy(() => import('src/pages/analytics'));
export const OtpPage = lazy(() => import('src/pages/otp'));
export const ResetPasswordPage = lazy(() => import('src/pages/resetPassword'));
export const DownloadViewPage = lazy(() => import('src/pages/download-view'));
export const NotificationsPage = lazy(() => import('src/pages/notifications'));
export const SettingsPagePage = lazy(() => import('src/pages/settings'));

export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'form', element: <FormPage /> },
        { path: 'analytics', element: <AnalyticsPage /> },
        { path: 'download-view', element: <DownloadViewPage /> },
        { path: 'notifications', element: <NotificationsPage /> },
        { path: 'settings', element: <SettingsPagePage /> },
        {
          path: 'shared-data-history',
          element: <SharedDataPage />,
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    {
      path: 'reset-password',
      element: <ResetPasswordPage />,
    },
    {
      path: 'otp',
      element: <OtpPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
