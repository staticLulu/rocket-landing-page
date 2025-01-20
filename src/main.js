import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import "swiper/swiper-bundle.css";

const app =  createApp(App);

app.use(router);
app.component('app-header',Header);
app.component('app-footer',Footer);
app.mount('#app')