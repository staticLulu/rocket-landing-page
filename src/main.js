import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import VueScrollTo from 'vue-scrollto';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

AOS.init({
  duration: 1000, // AOS animation duration
  once: true, // Animation happens only once
  startEvent: 'DOMContentLoaded',
  useClassNames: true, // Add AOS class names for tracking
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
});

// Detect when the AOS animation is complete and remove conflicts
document.querySelectorAll('.hero-image').forEach((element) => {
  element.addEventListener('aos:in', () => {
    element.style.animation = 'customAnimation 3s infinite';
  });
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
