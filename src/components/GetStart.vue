<template>
  <div class="markdown-body">
    <h1>开始使用</h1>
    <p>请先<a href="#/doc/install">安装</a>本组件库，然后引入下列组件</p>
    <pre> <code>import {Button,Tabs,Switch,Dialog} from "wheel-ui"</code> </pre>
    好了可以开始使用了

    <h2>Vue单文件组件</h2>
    <p>代码示例</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "king-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>
  </div>
</template>
