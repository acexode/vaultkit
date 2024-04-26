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
    title: 'Access code',
    path: '/access-code',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
