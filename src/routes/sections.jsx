import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes, useLocation } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import LoadingScreen from 'src/components/common/LoadingScreen';



export const ProtectedRoute = lazy(() => import('src/pages/protected-route'))

// ----------------------------------------------------------------------
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export const IndexPage = Loadable(lazy(() => import('src/pages/app')));
export const SharedDataPage = Loadable(lazy(() => import('src/pages/shared-data-history')));
export const UserPage = Loadable(lazy(() => import('src/pages/user')));
export const OrganizationPage = Loadable(lazy(() => import('src/pages/organization')));
export const FormPage = Loadable(lazy(() => import('src/pages/form')));
export const LoginPage = Loadable(lazy(() => import('src/pages/login')));
export const SignupPage = Loadable(lazy(() => import('src/pages/signup')));
export const AnalyticsPage = Loadable(lazy(() => import('src/pages/analytics')));
export const OtpPage = Loadable(lazy(() => import('src/pages/otp')));
export const ResetPasswordPage = Loadable(lazy(() => import('src/pages/resetPassword')));
export const DownloadViewPage = Loadable(lazy(() => import('src/pages/download-view')));
export const NotificationsPage = Loadable(lazy(() => import('src/pages/notifications')));
export const SettingsPagePage = Loadable(lazy(() => import('src/pages/settings')));
export const LandingPagePage = Loadable(lazy(() => import('src/pages/landing')));

export const Page404 = Loadable(lazy(() => import('src/pages/page-not-found')));
export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPagePage />,
    },
    {
      path: '/dashboard',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <ProtectedRoute />,
          children: [
            { element: <IndexPage />, index: true },
            { path: 'user', element: <UserPage /> },
            { path: 'organization', element: <OrganizationPage /> },
            { path: 'form', element: <FormPage /> },
            { path: 'analytics', element: <AnalyticsPage /> },
            { path: 'download-view', element: <DownloadViewPage /> },
            { path: 'notifications', element: <NotificationsPage /> },
            { path: 'settings', element: <SettingsPagePage /> },
            {
              path: 'shared-data-history',
              element: <SharedDataPage />,
            },
          ]
        }
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
      path: 'password/edit',
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
