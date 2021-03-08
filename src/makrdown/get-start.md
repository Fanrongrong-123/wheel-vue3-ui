# 开始使用

请先[安装](#/doc/install)本组件库，然后引入下列组件
     
    import {Button,Tabs,Switch,Dialog} from "wheel-ui" 
    
好了可以开始使用了

## Vue单文件组件
代码示例

    <template>
      <div><Button>按钮</Button></div>
    </template>

    <script>
      import {Button, Tabs, Switch, Dialog} from "wheel-ui"
      export default {
        components: {Button}
      }
    </script>
