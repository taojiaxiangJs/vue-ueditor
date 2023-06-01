<template>
  <div id="app">
    <div class="box">
      1.{{ content1 }}
      <vueUEditor v-model="content1"/>
    </div>
    <div class="box">
      2.{{ content2 }}
      <vueUEditor v-model="content2"/>
    </div>
    <div class="box">
      3.{{ content3 }}
      <vueUEditor v-model="content3"/>
    </div>
    <div class="box">
      4.{{ content4 }}
      <vueUEditor v-model="content4"/>
    </div>
  </div>
</template>

<script>
import vueUEditor from './components/vue-ueditor/vue-ueditor.vue'

export default {
  name: 'App',
  components: {
    vueUEditor
  },
  data() {
    return{
      editorConfig: {
        // 访问 UEditor 静态资源的根路径，可参考 https://hc199421.gitee.io/vue-ueditor-wrap/#/faq
        UEDITOR_HOME_URL: "/ueditor/",
      },
      content1: '',
      content2: '',
      content3: '',
      content4: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box{
  height: 80%;
  padding: 0 10px;
  flex: 1;
}
</style>
