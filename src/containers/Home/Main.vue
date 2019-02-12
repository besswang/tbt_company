<template>
  <div v-bind:class="{appmain:app,main:!app}">
    <typing-word
      class="max-main"
      :banner-url="bannerUrl"
    ></typing-word>
    <div class="special">
      <follow-show
        class="max-main"
      ></follow-show>
    </div>
  </div>
</template>

<script>
  import TypingWord from '../../components/Home/TypingWord.vue' // 打印字体
  import FollowShow from '../../components/Home/FollowShow.vue' // follow关注
  export default {
    name: 'HomePage',
    data () {
      return {
        bannerUrl: [],
        app: true
      }
    },
    components: {
      TypingWord,
      FollowShow
    },
    methods: {
      termFn () {
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          //移动端
          this.app = true
        } else {
          //pc端
          this.app = false
        }
      }
    },
    mounted () {
      this.termFn()
    }
  }
</script>

<style lang="stylus">
  .appmain
    min-height 50em
  .main
    min-height 950px
  .special
    background #fff
    margin 150px auto auto auto
</style>
