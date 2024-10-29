import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'home',
    path: '/dashboard',
    icon: icon('ic_home'),
  },
  {
    title: 'profile',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Shared Data history',
    path: '/dashboard/shared-data-history',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Analytics',
  //   path: '/dashboard/analytics',
  //   icon: icon('ic_analytics'),
  // },
];
export const OrganizationNavConfig = [
  {
    title: 'home',
    path: '/organization',
    icon: icon('ic_home'),
  },
  // {
  //   title: 'profile',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Workspace',
    path: '/organization/workspace',
    icon: icon('ic_org'),
  },
  // {
  //   title: 'Shared Data history',
  //   path: '/dashboard/shared-data-history',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Analytics',
  //   path: '/dashboard/analytics',
  //   icon: icon('ic_analytics'),
  // },
];

export default navConfig;
