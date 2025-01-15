import { createApp } from 'vue'
import App from './App.vue'

import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-footer',Footer);
app.mount('#app')