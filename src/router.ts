import Doc from './views/Doc.vue';
import Home from './views/Home.vue';

import SwitchDemo from './components/switch/SwitchDemo.vue';
import ButtonDemo from './components/Button/ButtonDemo.vue';
import DialogDemo from './components/Dialog/DialogDemo.vue';
import TabsDemo from './components/Tabs/TabsDemo.vue';

// @ts-ignore
import intro from './makrdown/intro.md';
// @ts-ignore
import install from './makrdown/install.md';
// @ts-ignore
import getStart from './makrdown/get-start.md';

import {createWebHashHistory, createRouter} from 'vue-router';

import MarkDown from './components/MarkDown.vue';
import {h} from 'vue';

const md = string => h(MarkDown, {content: string, key: string});

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', redirect: 'doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'install', component: md(install)},
        {path: 'get-start', component: md(getStart)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo}
      ]
    },
  ]
});
