import { HomePage, ConnectedPage } from './pages';
import {DefaultLayout} from './layouts'

export const routes = [
  {
    path: '/',
    component: DefaultLayout,
  },
  {
    path: '/connected',
    component: ConnectedPage,
  },
];
