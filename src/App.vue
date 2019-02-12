<template>
  <div id="app">

    <!-- <router-view/> -->
    <home-page></home-page>
    <new-foot v-show="footShow"></new-foot>
  </div>
</template>

<script>
import HomePage from './containers/Home/Main.vue' // 打印字体
// 投不投底部
import NewFoot from './components/Common/NewFoot.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NewFoot
  },
  data () {
    return {
      footShow: true
    }
  }
}
</script>
<style lang="stylus">
  @import "assets/stylus/common.styl"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#f7f7f7;
}
</style>
