import { createRouter, createWebHistory } from 'vue-router';
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
