import { createRouter, createWebHashHistory } from 'vue-router';
import ControlPage from '@/pages/ControlPage';
import DemoPage from '@/pages/DemoPage';

const routes = [
  {
    path: '/',
    component: DemoPage,
  },
  {
    path: '/control',
    component: ControlPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
