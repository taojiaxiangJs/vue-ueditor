import vueUEditor from './vue-ueditor.vue'

vueUEditor.install = function (Vue) {
  Vue.component(vueUEditor.name, vueUEditor)
}

export default vueUEditor