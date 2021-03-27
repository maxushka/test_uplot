import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, ObjectsPage, ObjectsSettingsPage } from './pages';

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/soft-structure/objects',
    component: ObjectsPage
  },
  {
    path: '/soft-structure/settings',
    component: ObjectsSettingsPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
