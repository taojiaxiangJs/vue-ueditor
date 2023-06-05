/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueUEditor"] = factory();
	else
		root["vueUEditor"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./packages/vue-ueditor/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://vueUEditor/./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-var */\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  var currentScript = window.document.currentScript\n  if (false) { var getCurrentScript; }\n\n  var src = currentScript && currentScript.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/)\n  if (src) {\n    __webpack_require__.p = src[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n\n//# sourceURL=webpack://vueUEditor/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");

/***/ }),

/***/ "./packages/vue-ueditor/vue-ueditor.vue":
/*!**********************************************!*\
  !*** ./packages/vue-ueditor/vue-ueditor.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_ueditor_vue_vue_type_template_id_a83420da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-ueditor.vue?vue&type=template&id=a83420da& */ \"./packages/vue-ueditor/vue-ueditor.vue?vue&type=template&id=a83420da&\");\n/* harmony import */ var _vue_ueditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-ueditor.vue?vue&type=script&lang=js& */ \"./packages/vue-ueditor/vue-ueditor.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ \"./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _vue_ueditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _vue_ueditor_vue_vue_type_template_id_a83420da___WEBPACK_IMPORTED_MODULE_0__.render,\n  _vue_ueditor_vue_vue_type_template_id_a83420da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/vue-ueditor/vue-ueditor.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vueUEditor/./packages/vue-ueditor/vue-ueditor.vue?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-ueditor/vue-ueditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-ueditor/vue-ueditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nconst STATUS_MAP = {\n  UN_READY: 'UN_READY', // 尚未初始化\n  PENDING: 'PENDING', // 开始初始化但尚未 ready\n  READY: 'READY' // 初始化完成并已 ready\n}\nconst LOAD_STATUS_MAP = {\n  UN_LOAD: 'UN_LOAD', // 尚未开始加载\n  PENDING: 'PENDING', // 加载中\n  LOADED: 'LOADED' // 加载完成\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'vueUEditor',\n  props: {\n    // v-model 实现方式\n    mode: {\n      type: String,\n      default: 'observer',\n      validator: function (value) {\n        // 1. observer 借助 MutationObserver API https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver\n        // 2. listener 借助 UEditor 的 contentChange 事件 https://ueditor.baidu.com/doc/#UE.Editor:contentChange\n        return ['observer', 'listener'].indexOf(value) !== -1\n      }\n    },\n    value: {\n      type: String,\n      default: ''\n    },\n    config: {\n      type: Object,\n      default: function () {\n        return {}\n      }\n    },\n    destroy: {\n      type: Boolean,\n      default: true\n    },\n    name: {\n      type: String,\n      default: ''\n    },\n    uploadUrl: {\n      type: String,  // 上传接口地址\n      default: ''\n    },\n    urlPrefix: {\n      type: String, // 图片等回显基地址\n      default: ''\n    },\n    editorDependencies: {  // ueditor要加载的资源\n      type: Array,\n      default: ()=> [\n        'ueditor.config.js',\n        'ueditor.all.min.js'\n      ]\n    },\n    customEditorPlugins: {  // 自定义ueditor插件\n      type: Array,\n      default: ()=> [] // 文件名列表 如：['addCustomizeButton.js']；文件实际放置位置在ueditor文件夹下\n    },\n    observerDebounceTime: {\n      type: Number,\n      default: 50,\n      validator: function (value) {\n        return value >= 20\n      }\n    },\n    observerOptions: {\n      type: Object,\n      default: function () {\n        return {\n          attributes: true, // 是否监听 DOM 元素的属性变化\n          attributeFilter: ['src', 'style', 'type', 'name'], // 只有在该数组中的属性值的变化才会监听\n          characterData: true, // 是否监听文本节点\n          childList: true, // 是否监听子节点\n          subtree: true // 是否监听后代元素\n        }\n      }\n    }\n  },\n  data() {\n    return {\n      editorId: '',\n      status: STATUS_MAP.UN_READY,\n      innerValue: '',\n      editor: null,\n      observer: null,\n      defaultConfig: {\n        autoHeight: false,\n        enableAutoSave: false,\n        initialFrameHeight: 400,\n        initialFrameWidth: '100%',\n        autoHeightEnabled: false,\n        zIndex: 9,\n        serverUrl: this.uploadUrl,//`${env.caring_api_path}file/upload`,\n        toolbars: [\n          [\n            'anchor', // 锚点\n            'undo', // 撤销\n            'redo', // 重做\n            'bold', // 加粗\n            'indent', // 首行缩进\n            'snapscreen', // 截图\n            'italic', // 斜体\n            'underline', // 下划线\n            'strikethrough', // 删除线\n            'subscript', // 下标\n            'fontborder', // 字符边框\n            'superscript', // 上标\n            'formatmatch', // 格式刷\n            'source', // 源代码\n            'blockquote', // 引用\n            'pasteplain', // 纯文本粘贴模式\n            'selectall', // 全选\n            'print', // 打印\n            'preview', // 预览\n            'horizontal', // 分隔线\n            'removeformat', // 清除格式\n            'time', // 时间\n            'date', // 日期\n            'unlink', // 取消链接\n            'insertrow', // 前插入行\n            'insertcol', // 前插入列\n            'mergeright', // 右合并单元格\n            'mergedown', // 下合并单元格\n            'deleterow', // 删除行\n            'deletecol', // 删除列\n            'splittorows', // 拆分成行\n            'splittocols', // 拆分成列\n            'splittocells', // 完全拆分单元格\n            'deletecaption', // 删除表格标题\n            'inserttitle', // 插入标题\n            'mergecells', // 合并多个单元格\n            'deletetable', // 删除表格\n            'cleardoc', // 清空文档\n            'insertparagraphbeforetable', // \"表格前插入行\"\n            'insertcode', // 代码语言\n            'fontfamily', // 字体\n            'fontsize', // 字号\n            'paragraph', // 段落格式\n            'simpleupload', // 单图上传\n            'insertimage', // 多图上传\n            'edittable', // 表格属性\n            'edittd', // 单元格属性\n            'link', // 超链接\n            'emotion', // 表情\n            'spechars', // 特殊字符\n            'searchreplace', // 查询替换\n            'map', // Baidu地图\n            // 'gmap', //Google地图\n            // 'insertvideo', //视频\n            'help', // 帮助\n            'justifyleft', // 居左对齐\n            'justifyright', // 居右对齐\n            'justifycenter', // 居中对齐\n            'justifyjustify', // 两端对齐\n            'forecolor', // 字体颜色\n            'backcolor', // 背景色\n            'insertorderedlist', // 有序列表\n            'insertunorderedlist', // 无序列表\n            'fullscreen', // 全屏\n            'directionalityltr', // 从左向右输入\n            'directionalityrtl', // 从右向左输入\n            'rowspacingtop', // 段前距\n            'rowspacingbottom', // 段后距\n            'pagebreak', // 分页\n            'insertframe', // 插入Iframe\n            'imagenone', // 默认\n            'imageleft', // 左浮动\n            'imageright', // 右浮动\n            // 'attachment', //附件\n            'imagecenter', // 居中\n            'wordimage', // 图片转存\n            'lineheight', // 行间距\n            'edittip ', // 编辑提示\n            'customstyle', // 自定义标题\n            'autotypeset', // 自动排版\n            // 'webapp', //百度应用\n            'touppercase', // 字母大写\n            'tolowercase', // 字母小写\n            'background', // 背景\n            'template', // 模板\n            'scrawl', // 涂鸦\n            // 'music', //音乐\n            'inserttable', // 插入表格\n            'drafts', // 从草稿箱加载\n            'charts' // 图表\n          ]\n        ],\n        /* 上传图片配置项 */\n        imageActionName: 'uploadimage', /* 执行上传图片的action名称 */\n        imageFieldName: 'file', /* 提交的图片表单名称 */\n        imageMaxSize: 2048000, /* 上传大小限制，单位B */\n        imageAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 上传图片格式显示 */\n        imageCompressEnable: true, /* 是否压缩图片,默认是true */\n        imageCompressBorder: 1600, /* 图片压缩最长边限制 */\n        imageInsertAlign: 'none', /* 插入的图片浮动方式 */\n        imageUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */\n        imagePathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */\n\n        /* 涂鸦图片上传配置项 */\n        scrawlActionName: 'uploadscrawl', /* 执行上传涂鸦的action名称 */\n        scrawlFieldName: 'file', /* 提交的图片表单名称 */\n        scrawlPathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */\n        scrawlMaxSize: 2048000, /* 上传大小限制，单位B */\n        scrawlUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */\n        scrawlInsertAlign: 'none',\n\n        /* 截图工具上传 */\n        snapscreenActionName: 'uploadimage', /* 执行上传截图的action名称 */\n        snapscreenPathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */\n        snapscreenUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */\n        snapscreenInsertAlign: 'none', /* 插入的图片浮动方式 */\n\n        /* 抓取远程图片配置 */\n        catcherLocalDomain: ['127.0.0.1', 'localhost', 'img.baidu.com'],\n        catcherActionName: 'catchimage', /* 执行抓取远程图片的action名称 */\n        catcherFieldName: 'file', /* 提交的图片列表表单名称 */\n        catcherPathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */\n        catcherUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */\n        catcherMaxSize: 2048000, /* 上传大小限制，单位B */\n        catcherAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 抓取图片格式显示 */\n\n        /* 上传视频配置 */\n        videoActionName: 'uploadvideo', /* 执行上传视频的action名称 */\n        videoFieldName: 'file', /* 提交的视频表单名称 */\n        videoPathFormat: '/ueditor/jsp/upload/video/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */\n        videoUrlPrefix: this.urlPrefix, /* 视频访问路径前缀 */\n        videoMaxSize: 102400000, /* 上传大小限制，单位B，默认100MB */\n        videoAllowFiles: [\n          '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',\n          '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid'], /* 上传视频格式显示 */\n\n        /* 上传文件配置 */\n        fileActionName: 'uploadfile', /* controller里,执行上传视频的action名称 */\n        fileFieldName: 'file', /* 提交的文件表单名称 */\n        filePathFormat: '/ueditor/jsp/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */\n        fileUrlPrefix: this.urlPrefix, /* 文件访问路径前缀 */\n        fileMaxSize: 51200000, /* 上传大小限制，单位B，默认50MB */\n        fileAllowFiles: [\n          '.png', '.jpg', '.jpeg', '.gif', '.bmp',\n          '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',\n          '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid',\n          '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso',\n          '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml'\n        ], /* 上传文件格式显示 */\n\n        /* 列出指定目录下的图片 */\n        imageManagerActionName: 'listimage', /* 执行图片管理的action名称 */\n        imageManagerListPath: '/ueditor/jsp/upload/image/', /* 指定要列出图片的目录 */\n        imageManagerListSize: 20, /* 每次列出文件数量 */\n        imageManagerUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */\n        imageManagerInsertAlign: 'none', /* 插入的图片浮动方式 */\n        imageManagerAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 列出的文件类型 */\n\n        /* 列出指定目录下的文件 */\n        fileManagerActionName: 'listfile', /* 执行文件管理的action名称 */\n        fileManagerListPath: '/ueditor/jsp/upload/file/', /* 指定要列出文件的目录 */\n        fileManagerUrlPrefix: this.urlPrefix, /* 文件访问路径前缀 */\n        fileManagerListSize: 20, /* 每次列出文件数量 */\n        fileManagerAllowFiles: [\n          '.png', '.jpg', '.jpeg', '.gif', '.bmp',\n          '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',\n          '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid',\n          '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso',\n          '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml'\n        ] /* 列出的文件类型 */\n      }\n    }\n  },\n  methods: {\n    initEnv() {\n      this.editorId = `${this.randomString(8)}_${Date.now()}`\n      // 创建资源加载状态对象\n      if (!window.$loadOverStatus) {\n        window.$loadOverStatus = {};\n      }\n      const promiseDependenciesList = []\n      this.editorDependencies.forEach(e=> {\n        window.$loadOverStatus[e] || (window.$loadOverStatus[e] = LOAD_STATUS_MAP.UN_LOAD)\n        promiseDependenciesList.push(this.createScript(e))\n      })\n      const load = (promiseList) => {\n        return new Promise((resolve) => {\n          if (promiseList.length) {\n            Promise.all(promiseList).then(() => {\n              resolve()\n            })\n          } else {\n            resolve()\n          }\n        })\n      }\n      load(promiseDependenciesList)\n        .then(() => {\n          // 加载自定义插件\n          // 自定义插件需在 默认资源 加载完成之后加载\n          const promisePluginsList = []\n          this.customEditorPlugins.forEach((e) => {\n            window.$loadOverStatus[e] || (window.$loadOverStatus[e] = LOAD_STATUS_MAP.UN_LOAD)\n            promisePluginsList.push(this.createScript(e))\n          })\n          return load(promisePluginsList)\n        })\n        .then(() => {\n          this.createInstance()\n        })\n        .catch((e) => {\n          console.error(e)\n          throw new Error('[vue-ueditor] UEditor 资源加载失败！请检查资源是否存在！')\n        })\n    },\n    createScript(fileName) {\n      return new Promise((resolve, reject) => {\n        if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.LOADED) {\n          resolve()\n          return\n        }\n        if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.PENDING) {\n          let Timer = setInterval(()=> {\n            if(window.$loadOverStatus[fileName] !== LOAD_STATUS_MAP.PENDING) {\n              clearInterval(Timer)\n              if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.LOADED) resolve()\n              if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.UN_LOAD) reject()\n            }\n          }, 100)\n          return\n        }\n        window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.PENDING\n        const scriptEl = document.createElement('script')\n        scriptEl.type = 'text/javascript'\n        scriptEl.async = 'async'\n        scriptEl.src = `./ueditor/${fileName}`\n        document.body.appendChild(scriptEl)\n        if (scriptEl.readyState) {\n          // IE\n          scriptEl.onreadystatechange = function () {\n            if (\n              scriptEl.readyState === 'complete' ||\n              scriptEl.readyState === 'loaded'\n            ) {\n              scriptEl.onreadystatechange = null\n              window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.LOADED\n              resolve()\n            }\n          }\n        } else {\n          // 非IE\n          scriptEl.onload = function () {\n            window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.LOADED\n            resolve()\n          }\n          scriptEl.onerror = function () {\n            window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.UN_LOAD\n            reject()\n          }\n        }\n      })\n    },\n    createInstance() {\n      const editor = document.createElement('script')\n      editor.type = 'text/plain'\n      editor.id = 'container_' + this.editorId\n      editor.name = 'content'\n      document.querySelector('#ueditor_' + this.editorId).appendChild(editor)\n      this.editor = window.UE.getEditor('container_' + this.editorId, {\n        ...this.defaultConfig,\n        ...this.config\n      })\n      this.editor.ready(() => {\n        if (this.status === STATUS_MAP.READY) {\n          // 使用 keep-alive 组件会出现这种情况\n          this.editor.setContent(this.value)\n        } else {\n          this.status = STATUS_MAP.READY\n          this.$emit('ready', this.editor)\n          if (this.value) {\n            this.editor.setContent(this.value)\n          }\n        }\n        if (this.mode === 'observer' && window.MutationObserver) {\n          this._observerChangeListener()\n        } else {\n          this._normalChangeListener()\n        }\n      })\n    },\n    _contentChangeHandler() {\n      this.innerValue = this.editor.getContent()\n      this.$emit('input', this.innerValue)\n    },\n    // 基于 UEditor 的 contentChange 事件\n    _normalChangeListener() {\n      this.editor.addListener('contentChange', this._contentChangeHandler)\n    },\n    // 基于 MutationObserver API\n    _observerChangeListener() {\n      const changeHandle = () => {\n        if (this.editor.document.getElementById('baidu_pastebin')) {\n          return\n        }\n        this.innerValue = this.editor.getContent()\n        this.$emit('input', this.innerValue)\n      }\n      // 函数防抖\n      this.observer = new MutationObserver(\n        this.debounce(changeHandle, this.observerDebounceTime)\n      )\n      this.observer.observe(this.editor.body, this.observerOptions)\n    },\n    debounce(fun, delay) {\n      let timer = null\n      const debounced = function () {\n        const ctx = this\n        const args = arguments\n        if (timer) clearTimeout(timer)\n        timer = setTimeout(function () {\n          fun.apply(ctx, args)\n        }, delay)\n      }\n      return debounced\n    },\n    randomString (length) {\n      const alphabet = 'abcdefghijklmnopqrstuvwxyz';\n      let str = '';\n      for (let i = 0; i < length; i++) {\n        str += alphabet.charAt(Math.floor(Math.random() * alphabet.length));\n      }\n      return str;\n    }\n  },\n  deactivated() {\n    if (this.editor) {\n      this.editor.removeListener('contentChange', this._contentChangeHandler)\n    }\n    if (this.observer) {\n      this.observer.disconnect()\n    }\n  },\n  beforeDestroy() {\n    if (this.destroy && this.editor && this.editor.destroy) {\n      this.editor.destroy()\n    }\n    if (this.observer && this.observer.disconnect) {\n      this.observer.disconnect()\n    }\n  },\n  // v-model语法糖实现\n  watch: {\n    value: {\n      handler(value) {\n        if (this.status === STATUS_MAP.UN_READY) {\n          this.status = STATUS_MAP.PENDING;\n          (this.forceInit || typeof window !== 'undefined') && this.initEnv()\n        } else if (this.status === STATUS_MAP.READY) {\n          value === this.innerValue || this.editor.setContent(value || '')\n        }\n      },\n      immediate: true\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vueUEditor/./packages/vue-ueditor/vue-ueditor.vue?./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./packages/vue-ueditor/vue-ueditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./packages/vue-ueditor/vue-ueditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_vue_ueditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./vue-ueditor.vue?vue&type=script&lang=js& */ \"./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-ueditor/vue-ueditor.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_vue_ueditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vueUEditor/./packages/vue-ueditor/vue-ueditor.vue?");

/***/ }),

/***/ "./packages/vue-ueditor/vue-ueditor.vue?vue&type=template&id=a83420da&":
/*!*****************************************************************************!*\
  !*** ./packages/vue-ueditor/vue-ueditor.vue?vue&type=template&id=a83420da& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_vue_ueditor_vue_vue_type_template_id_a83420da___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_vue_ueditor_vue_vue_type_template_id_a83420da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_cli_service_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_vue_ueditor_vue_vue_type_template_id_a83420da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./vue-ueditor.vue?vue&type=template&id=a83420da& */ \"./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-ueditor/vue-ueditor.vue?vue&type=template&id=a83420da&\");\n\n\n//# sourceURL=webpack://vueUEditor/./packages/vue-ueditor/vue-ueditor.vue?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-ueditor/vue-ueditor.vue?vue&type=template&id=a83420da&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-ueditor/vue-ueditor.vue?vue&type=template&id=a83420da& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; },\n/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\"div\", {\n    ref: \"containerRef\",\n    attrs: { id: \"ueditor_\" + _vm.editorId, name: _vm.name },\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vueUEditor/./packages/vue-ueditor/vue-ueditor.vue?./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ normalizeComponent; }\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://vueUEditor/./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./packages/vue-ueditor/index.js":
/*!***************************************!*\
  !*** ./packages/vue-ueditor/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_ueditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-ueditor.vue */ \"./packages/vue-ueditor/vue-ueditor.vue\");\n\r\n\r\n_vue_ueditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\r\n  Vue.component(_vue_ueditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _vue_ueditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_vue_ueditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://vueUEditor/./packages/vue-ueditor/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});