<template>
  <div ref="containerRef" :id="'ueditor_' + editorId" :name="name"></div>
</template>

<script>
const STATUS_MAP = {
  UN_READY: 'UN_READY', // 尚未初始化
  PENDING: 'PENDING', // 开始初始化但尚未 ready
  READY: 'READY' // 初始化完成并已 ready
}
const LOAD_STATUS_MAP = {
  UN_LOAD: 'UN_LOAD', // 尚未开始加载
  PENDING: 'PENDING', // 加载中
  LOADED: 'LOADED' // 加载完成
}
export default {
  name: 'vueUEditor',
  props: {
    // v-model 实现方式
    mode: {
      type: String,
      default: 'observer',
      validator: function (value) {
        // 1. observer 借助 MutationObserver API https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
        // 2. listener 借助 UEditor 的 contentChange 事件 https://ueditor.baidu.com/doc/#UE.Editor:contentChange
        return ['observer', 'listener'].indexOf(value) !== -1
      }
    },
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: function () {
        return {}
      }
    },
    destroy: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    },
    uploadUrl: {
      type: String,  // 上传接口地址
      default: ''
    },
    urlPrefix: {
      type: String, // 图片等回显基地址
      default: ''
    },
    editorDependencies: {  // ueditor要加载的资源
      type: Array,
      default: ()=> [
        'ueditor.config.js',
        'ueditor.all.min.js'
      ]
    },
    customEditorPlugins: {  // 自定义ueditor插件
      type: Array,
      default: ()=> [] // 文件名列表 如：['addCustomizeButton.js']；文件实际放置位置在ueditor文件夹下
    },
    observerDebounceTime: {
      type: Number,
      default: 50,
      validator: function (value) {
        return value >= 20
      }
    },
    observerOptions: {
      type: Object,
      default: function () {
        return {
          attributes: true, // 是否监听 DOM 元素的属性变化
          attributeFilter: ['src', 'style', 'type', 'name'], // 只有在该数组中的属性值的变化才会监听
          characterData: true, // 是否监听文本节点
          childList: true, // 是否监听子节点
          subtree: true // 是否监听后代元素
        }
      }
    }
  },
  data() {
    return {
      editorId: '',
      status: STATUS_MAP.UN_READY,
      innerValue: '',
      editor: null,
      observer: null,
      defaultConfig: {
        autoHeight: false,
        enableAutoSave: false,
        initialFrameHeight: 400,
        initialFrameWidth: '100%',
        autoHeightEnabled: false,
        zIndex: 9,
        serverUrl: this.uploadUrl,//`${env.caring_api_path}file/upload`,
        toolbars: [
          [
            'anchor', // 锚点
            'undo', // 撤销
            'redo', // 重做
            'bold', // 加粗
            'indent', // 首行缩进
            'snapscreen', // 截图
            'italic', // 斜体
            'underline', // 下划线
            'strikethrough', // 删除线
            'subscript', // 下标
            'fontborder', // 字符边框
            'superscript', // 上标
            'formatmatch', // 格式刷
            'source', // 源代码
            'blockquote', // 引用
            'pasteplain', // 纯文本粘贴模式
            'selectall', // 全选
            'print', // 打印
            'preview', // 预览
            'horizontal', // 分隔线
            'removeformat', // 清除格式
            'time', // 时间
            'date', // 日期
            'unlink', // 取消链接
            'insertrow', // 前插入行
            'insertcol', // 前插入列
            'mergeright', // 右合并单元格
            'mergedown', // 下合并单元格
            'deleterow', // 删除行
            'deletecol', // 删除列
            'splittorows', // 拆分成行
            'splittocols', // 拆分成列
            'splittocells', // 完全拆分单元格
            'deletecaption', // 删除表格标题
            'inserttitle', // 插入标题
            'mergecells', // 合并多个单元格
            'deletetable', // 删除表格
            'cleardoc', // 清空文档
            'insertparagraphbeforetable', // "表格前插入行"
            'insertcode', // 代码语言
            'fontfamily', // 字体
            'fontsize', // 字号
            'paragraph', // 段落格式
            'simpleupload', // 单图上传
            'insertimage', // 多图上传
            'edittable', // 表格属性
            'edittd', // 单元格属性
            'link', // 超链接
            'emotion', // 表情
            'spechars', // 特殊字符
            'searchreplace', // 查询替换
            'map', // Baidu地图
            // 'gmap', //Google地图
            // 'insertvideo', //视频
            'help', // 帮助
            'justifyleft', // 居左对齐
            'justifyright', // 居右对齐
            'justifycenter', // 居中对齐
            'justifyjustify', // 两端对齐
            'forecolor', // 字体颜色
            'backcolor', // 背景色
            'insertorderedlist', // 有序列表
            'insertunorderedlist', // 无序列表
            'fullscreen', // 全屏
            'directionalityltr', // 从左向右输入
            'directionalityrtl', // 从右向左输入
            'rowspacingtop', // 段前距
            'rowspacingbottom', // 段后距
            'pagebreak', // 分页
            'insertframe', // 插入Iframe
            'imagenone', // 默认
            'imageleft', // 左浮动
            'imageright', // 右浮动
            // 'attachment', //附件
            'imagecenter', // 居中
            'wordimage', // 图片转存
            'lineheight', // 行间距
            'edittip ', // 编辑提示
            'customstyle', // 自定义标题
            'autotypeset', // 自动排版
            // 'webapp', //百度应用
            'touppercase', // 字母大写
            'tolowercase', // 字母小写
            'background', // 背景
            'template', // 模板
            'scrawl', // 涂鸦
            // 'music', //音乐
            'inserttable', // 插入表格
            'drafts', // 从草稿箱加载
            'charts' // 图表
          ]
        ],
        /* 上传图片配置项 */
        imageActionName: 'uploadimage', /* 执行上传图片的action名称 */
        imageFieldName: 'file', /* 提交的图片表单名称 */
        imageMaxSize: 2048000, /* 上传大小限制，单位B */
        imageAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 上传图片格式显示 */
        imageCompressEnable: true, /* 是否压缩图片,默认是true */
        imageCompressBorder: 1600, /* 图片压缩最长边限制 */
        imageInsertAlign: 'none', /* 插入的图片浮动方式 */
        imageUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */
        imagePathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */

        /* 涂鸦图片上传配置项 */
        scrawlActionName: 'uploadscrawl', /* 执行上传涂鸦的action名称 */
        scrawlFieldName: 'file', /* 提交的图片表单名称 */
        scrawlPathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */
        scrawlMaxSize: 2048000, /* 上传大小限制，单位B */
        scrawlUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */
        scrawlInsertAlign: 'none',

        /* 截图工具上传 */
        snapscreenActionName: 'uploadimage', /* 执行上传截图的action名称 */
        snapscreenPathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */
        snapscreenUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */
        snapscreenInsertAlign: 'none', /* 插入的图片浮动方式 */

        /* 抓取远程图片配置 */
        catcherLocalDomain: ['127.0.0.1', 'localhost', 'img.baidu.com'],
        catcherActionName: 'catchimage', /* 执行抓取远程图片的action名称 */
        catcherFieldName: 'file', /* 提交的图片列表表单名称 */
        catcherPathFormat: '/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */
        catcherUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */
        catcherMaxSize: 2048000, /* 上传大小限制，单位B */
        catcherAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 抓取图片格式显示 */

        /* 上传视频配置 */
        videoActionName: 'uploadvideo', /* 执行上传视频的action名称 */
        videoFieldName: 'file', /* 提交的视频表单名称 */
        videoPathFormat: '/ueditor/jsp/upload/video/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */
        videoUrlPrefix: this.urlPrefix, /* 视频访问路径前缀 */
        videoMaxSize: 102400000, /* 上传大小限制，单位B，默认100MB */
        videoAllowFiles: [
          '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',
          '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid'], /* 上传视频格式显示 */

        /* 上传文件配置 */
        fileActionName: 'uploadfile', /* controller里,执行上传视频的action名称 */
        fileFieldName: 'file', /* 提交的文件表单名称 */
        filePathFormat: '/ueditor/jsp/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}', /* 上传保存路径,可以自定义保存路径和文件名格式 */
        fileUrlPrefix: this.urlPrefix, /* 文件访问路径前缀 */
        fileMaxSize: 51200000, /* 上传大小限制，单位B，默认50MB */
        fileAllowFiles: [
          '.png', '.jpg', '.jpeg', '.gif', '.bmp',
          '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',
          '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid',
          '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso',
          '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml'
        ], /* 上传文件格式显示 */

        /* 列出指定目录下的图片 */
        imageManagerActionName: 'listimage', /* 执行图片管理的action名称 */
        imageManagerListPath: '/ueditor/jsp/upload/image/', /* 指定要列出图片的目录 */
        imageManagerListSize: 20, /* 每次列出文件数量 */
        imageManagerUrlPrefix: this.urlPrefix, /* 图片访问路径前缀 */
        imageManagerInsertAlign: 'none', /* 插入的图片浮动方式 */
        imageManagerAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 列出的文件类型 */

        /* 列出指定目录下的文件 */
        fileManagerActionName: 'listfile', /* 执行文件管理的action名称 */
        fileManagerListPath: '/ueditor/jsp/upload/file/', /* 指定要列出文件的目录 */
        fileManagerUrlPrefix: this.urlPrefix, /* 文件访问路径前缀 */
        fileManagerListSize: 20, /* 每次列出文件数量 */
        fileManagerAllowFiles: [
          '.png', '.jpg', '.jpeg', '.gif', '.bmp',
          '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',
          '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid',
          '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso',
          '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml'
        ] /* 列出的文件类型 */
      }
    }
  },
  methods: {
    initEnv() {
      this.editorId = `${this.randomString(8)}_${Date.now()}`
      // 创建资源加载状态对象
      if (!window.$loadOverStatus) {
        window.$loadOverStatus = {};
      }
      const promiseDependenciesList = []
      this.editorDependencies.forEach(e=> {
        window.$loadOverStatus[e] || (window.$loadOverStatus[e] = LOAD_STATUS_MAP.UN_LOAD)
        promiseDependenciesList.push(this.createScript(e))
      })
      const load = (promiseList) => {
        return new Promise((resolve) => {
          if (promiseList.length) {
            Promise.all(promiseList).then(() => {
              resolve()
            })
          } else {
            resolve()
          }
        })
      }
      load(promiseDependenciesList)
        .then(() => {
          // 加载自定义插件
          // 自定义插件需在 默认资源 加载完成之后加载
          const promisePluginsList = []
          this.customEditorPlugins.forEach((e) => {
            window.$loadOverStatus[e] || (window.$loadOverStatus[e] = LOAD_STATUS_MAP.UN_LOAD)
            promisePluginsList.push(this.createScript(e))
          })
          return load(promisePluginsList)
        })
        .then(() => {
          this.createInstance()
        })
        .catch((e) => {
          console.error(e)
          throw new Error('[vue-ueditor] UEditor 资源加载失败！请检查资源是否存在！')
        })
    },
    createScript(fileName) {
      return new Promise((resolve, reject) => {
        if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.LOADED) {
          resolve()
          return
        }
        if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.PENDING) {
          let Timer = setInterval(()=> {
            if(window.$loadOverStatus[fileName] !== LOAD_STATUS_MAP.PENDING) {
              clearInterval(Timer)
              if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.LOADED) resolve()
              if(window.$loadOverStatus[fileName] === LOAD_STATUS_MAP.UN_LOAD) reject()
            }
          }, 100)
          return
        }
        window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.PENDING
        const scriptEl = document.createElement('script')
        scriptEl.type = 'text/javascript'
        scriptEl.async = 'async'
        scriptEl.src = `./ueditor/${fileName}`
        document.body.appendChild(scriptEl)
        if (scriptEl.readyState) {
          // IE
          scriptEl.onreadystatechange = function () {
            if (
              scriptEl.readyState === 'complete' ||
              scriptEl.readyState === 'loaded'
            ) {
              scriptEl.onreadystatechange = null
              window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.LOADED
              resolve()
            }
          }
        } else {
          // 非IE
          scriptEl.onload = function () {
            window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.LOADED
            resolve()
          }
          scriptEl.onerror = function () {
            window.$loadOverStatus[fileName] = LOAD_STATUS_MAP.UN_LOAD
            reject()
          }
        }
      })
    },
    createInstance() {
      const editor = document.createElement('script')
      editor.type = 'text/plain'
      editor.id = 'container_' + this.editorId
      editor.name = 'content'
      document.querySelector('#ueditor_' + this.editorId).appendChild(editor)
      this.editor = window.UE.getEditor('container_' + this.editorId, {
        ...this.defaultConfig,
        ...this.config
      })
      this.editor.ready(() => {
        if (this.status === STATUS_MAP.READY) {
          // 使用 keep-alive 组件会出现这种情况
          this.editor.setContent(this.value)
        } else {
          this.status = STATUS_MAP.READY
          this.$emit('ready', this.editor)
          if (this.value) {
            this.editor.setContent(this.value)
          }
        }
        if (this.mode === 'observer' && window.MutationObserver) {
          this._observerChangeListener()
        } else {
          this._normalChangeListener()
        }
      })
    },
    _contentChangeHandler() {
      this.innerValue = this.editor.getContent()
      this.$emit('input', this.innerValue)
    },
    // 基于 UEditor 的 contentChange 事件
    _normalChangeListener() {
      this.editor.addListener('contentChange', this._contentChangeHandler)
    },
    // 基于 MutationObserver API
    _observerChangeListener() {
      const changeHandle = () => {
        if (this.editor.document.getElementById('baidu_pastebin')) {
          return
        }
        this.innerValue = this.editor.getContent()
        this.$emit('input', this.innerValue)
      }
      // 函数防抖
      this.observer = new MutationObserver(
        this.debounce(changeHandle, this.observerDebounceTime)
      )
      this.observer.observe(this.editor.body, this.observerOptions)
    },
    debounce(fun, delay) {
      let timer = null
      const debounced = function () {
        const ctx = this
        const args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
          fun.apply(ctx, args)
        }, delay)
      }
      return debounced
    },
    randomString (length) {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let str = '';
      for (let i = 0; i < length; i++) {
        str += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      return str;
    }
  },
  deactivated() {
    if (this.editor) {
      this.editor.removeListener('contentChange', this._contentChangeHandler)
    }
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  beforeDestroy() {
    if (this.destroy && this.editor && this.editor.destroy) {
      this.editor.destroy()
    }
    if (this.observer && this.observer.disconnect) {
      this.observer.disconnect()
    }
  },
  // v-model语法糖实现
  watch: {
    value: {
      handler(value) {
        if (this.status === STATUS_MAP.UN_READY) {
          this.status = STATUS_MAP.PENDING;
          (this.forceInit || typeof window !== 'undefined') && this.initEnv()
        } else if (this.status === STATUS_MAP.READY) {
          value === this.innerValue || this.editor.setContent(value || '')
        }
      },
      immediate: true
    }
  }
}
</script>
