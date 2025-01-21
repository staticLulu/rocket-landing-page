import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import VueScrollTo from 'vue-scrollto';
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);

AOS.init({
  duration: 1000, 
  once: false,
  delay: 0,
  offset:0,
});

app.use(VueScrollTo, {
  duration: 1200,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
});

app.use(router);
app.component('app-header', Header);
app.component('app-footer', Footer);

app.mount('#app');
