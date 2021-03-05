import Doc from './views/Doc.vue';
import Home from './views/Home.vue';

import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';

import Intro from './components/Intro.vue';
import Install from './components/Install.vue';
import GetStart from './components/GetStart.vue';

import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: Intro},
        {path: 'install', component: Install},
        {path: 'get-start', component: GetStart},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo}
      ]
    },
  ]
});
