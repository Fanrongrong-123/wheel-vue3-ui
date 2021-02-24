import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';

import Doc from './views/Doc.vue';
import Home from './views/Home.vue';

import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/doc', component: Doc},
    {path: '/home', component: Home},
    {path: '/', component: Home},
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
