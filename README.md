<h1 align="center">vue-ueditor-v2</h1>

## Installation

```bash
# vue-ueditor-v2 仅支持 Vue 2
npm i vue-ueditor-v2
# 或者
yarn add vue-ueditor-v2
```

## Quick Start

1. 下载 UEditor
   [下载地址](https://github.com/taojiaxiangJs/ueditor/tree/main)。

> UEditor 并不支持通过 npm 的方式来安装，vue-ueditor-v2 也只是一个 Vue 组件，组件本身并不是 **UEditor 的 Vue 版**。了解 UEditor 基本使用，请参考 [UEditor 官网](http://fex.baidu.com/ueditor/#start-start)。

在下载后的项目终端执行 `grunt default` 命令，打包得到 ueditor 并移动到你项目的[静态资源](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-文件夹)目录下（项目中默认已打包），比如下面是一个由 Vue CLI（v3+）创建的项目，静态资源目录就是 public。

2. 引入`VueUeditor`组件

   ```js
   import VueUeditor from 'vue-ueditor-v2' // ES6 Module
   ```

3. 注册组件
   ```js
   components: {
     VueUeditor
   }
   // 或者在 main.js 里将它注册为全局组件
   Vue.component('vue-ueditor', VueUeditor)
   ```
4. `v-model`绑定数据

   ```html
   <vue-ueditor v-model="msg"></vue-ueditor>
   ```

   ```js
   data () {
     return {
       msg: '<h2>Hello World!</h2>'
     }
   }
   ```

   > 至此你已经可以在页面中看到一个初始化之后的 `UEditor` 了，并且它已经成功和数据绑定了！👏👏👏

5. 根据项目需求修改配置，完整配置请参考 [官方文档](http://fex.baidu.com/ueditor/#start-config)

   ```html
   <vue-ueditor v-model="msg" :config="editorConfig"></vue-ueditor>
   ```

   ```js
   data() {
     return {
       msg: "<h2>Hello World!</h2>",
       editorConfig: {
         // ...
       },
     };
   },
   ```

## Props

| 参数                   | 说明                                                                                              | 类型       | 默认值                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- |
| v-model                | 当前富文本编辑器内容                                                                              | _string_   |                                             |
| config                 | [UEditor 配置](http://fex.baidu.com/ueditor/#start-config)                                        | _object_   |                                             |
| editor-dependencies    | 默认依赖,该文件地址必须放在 ueditor 文件夹下                                                      | _array_    | ['ueditor.config.js'，'ueditor.all.min.js'] |
| custom-editor-plugins  | 自定义插件(js 文件),该文件地址必须放在 ueditor 文件夹下                                           | _array_    |                                             |
| upload-url             | 上传接口地址                                                                                      | _string_   |                                             |
| url-prefix             | 图片等回显基地址                                                                                  | _string_   |                                             |
| name                   | 类似 input 框的 name 属性，[常用于表单中](http://fex.baidu.com/ueditor/#start-submit)             | _string_   |                                             |
| mode                   | 监听内容变化的方式，可选值为 `observer`, `listener`                                               | _string_   | `observer`                                  |
| observer-options       | [MutationObserver 的参数 ](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit) | _object_   | 见下方说明                                  |
| observer-debounce-time | MutationObserver 的回调函数防抖间隔                                                               | _number_   | 50                                          |
| editor-dependencies    | 指定使用 UEditor 所需要加载的 JS 和 CSS                                                           | _string[]_ |                                             |

### mode 属性说明

v-model 的实现依赖对编辑器内容变化的监听，组件提供了两种可选的监听方式，但是不建议修改，除非你知道自己在干什么。

1. `listener` 模式借助 UEditor 的 contentChange 事件，优点在于依赖官方提供的事件 API，无需额外的性能消耗，浏览器兼容性更好。但缺点在于监听不准确，存在如“特殊字符（? ! \$ #）输入时不触发”的 BUG。
2. `observer` 模式借助 [MutationObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)。它能提供更准确的监听，但编辑器内容变化时，observer 回调可能会连续触发多次，从而导致频繁的 `emit('update:modelValue', editor.getContent());`。你可以通过 `observer-debounce-time` 属性控制 `emit` 的最小时间间隔，还可以通过 `observer-options` 属性有选择的设置 [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit) 的监听行为。兼容性[参考此处](https://caniuse.com/?search=MutationObserver)，`vue-ueditor-wrap` 会在不支持的浏览器中自动启用 `listener` 模式。`observer-options` 的默认值为

```js
{
  attributes: true, // 是否监听 DOM 元素的属性变化
  attributeFilter: ['src', 'style', 'type', 'name'], // 只有在该数组中的属性值的变化才会监听
  characterData: true, // 是否监听文本节点
  childList: true, // 是否监听子节点
  subtree: true, // 是否监听后代元素
};
```

### editor-dependencies 属性说明

使用 UEditor 时，我们通常都是在 index.html 中提前加载好 UEditor 的脚本，如下所示。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <!-- 加载配置文件 -->
    <script type="text/javascript" src="ueditor.config.min.js"></script>
    <!-- 加载编辑器源码文件 -->
    <script type="text/javascript" src="ueditor.all.js"></script>
  </head>
  <body>
    <div id="container"></div>

    <!-- 实例化编辑器 -->
    <script type="text/javascript">
      var ue = UE.getEditor('container')
    </script>
  </body>
</html>
```

但是富文本编辑器通常并不是在首页使用的，例如有一个“商品编辑页”通过 UEditor 来编辑商品介绍，如果用户不需要编辑商品，根本就用不到 UEditor，对这个用户来说完全可以不加载 UEditor 相关的资源。所以最好是能做到“**按需加载**”。

<br/>

为此 `vue-ueditor-v2` 内部会在组件实例化时通过动态创建 `script` 的方式来加载 UEditor 脚本，等脚本加载完成后，再实例化 UEditor。默认加载的脚本是 `ueditor.config.js` 和 `ueditor.all.min.js`，如果你希望自定义要加载的 JS，比如自定义插件，那你就可以利用 `customEditorPlugins` 属性直接指定依赖的资源。具体用法可参考[示例](https://github.com/taojiaxiangJs/vue-ueditor)。
