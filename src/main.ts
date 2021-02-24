import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import Test from './components/test.vue';
import Frank from './components/frank.vue';

import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Test},
    {path: '/xxx', component: Frank}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
