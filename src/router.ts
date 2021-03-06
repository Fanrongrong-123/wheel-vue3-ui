import Doc from './views/Doc.vue';
import Home from './views/Home.vue';

import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';

import {createWebHashHistory, createRouter} from 'vue-router';

import MarkDown from './components/MarkDown.vue';
import {h} from 'vue';

const md = filename => h(MarkDown, {path:`../makrdown/${filename}.md`, key: filename});

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
        {path: 'intro', component: md('Intro')},
        {path: 'install', component: md('Install')},
        {path: 'get-start', component: md('GetStart')},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo}
      ]
    },
  ]
});
