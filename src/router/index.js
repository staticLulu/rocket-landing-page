import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import CareerPage from '@/views/CareerPage.vue';

const routes = [
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/career', name: 'Career', component: CareerPage },
  // { path: '/products', name: 'Products', component: ProductsPage },
  // { path: '/business', name: 'Business', component: BusinessPage },
];

const router = createRouter({
  history: createWebHistory(), // Use the correct history mode
  routes,
});

export default router;
