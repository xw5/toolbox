import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';
import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';

createApp(App).use(VueDiff, {
  componentName: 'VueDiff',
}).use(router).mount('#app');
