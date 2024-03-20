import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';
import CodeDiff from 'v-code-diff';

createApp(App).use(CodeDiff).use(router).mount('#app');
