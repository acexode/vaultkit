import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'home',
    path: '/',
    icon: icon('ic_home'),
  },
  {
    title: 'profile',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Shared Data history',
    path: '/shared-data-history',
    icon: icon('ic_lock'),
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: icon('ic_analytics'),
  },
];

export default navConfig;
