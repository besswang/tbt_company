<template>
  <div class="footcon">
    <div class="newfoot pricing-tables pure-g">
      <div class="left border-right pure-u-1 pure-u-md-1-2">
        <p>关注我们</p>
        <div v-if="app" class="flex flex-c flex-center">
          <img v-lazy="code" alt="">
          <span style="padding:1em 0">微信</span>
        </div>
        <ul v-else class="flex">
          <li class="flex1 flex-c flex-center">
            <img v-lazy="f1" alt="">
            <span>iOS版</span>
            <div class="img-box img1"></div>
          </li>
          <li class="flex1 flex-c flex-center">
            <img v-lazy="f2" alt="">
            <span>Android版</span>
            <div class="img-box img2"></div>
          </li>
          <li class="flex1 flex-c flex-center">
            <img v-lazy="f3" alt="">
            <span>微信</span>
            <div class="img-box img3"></div>
          </li>
        </ul>
      </div>

      <div class="right pure-u-1 pure-u-md-1-2">
        <p>联系我们</p>
        <ul class="flex">
          <li class="flex1 flex-center flex-j-c">
            <img v-lazy="f4" alt="">
            <span>business@toubutou.com</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewFoot',
  data () {
    return {
      app: true,
      code: require('../../assets/code.png'),
      f1: require('../../assets/f1.png'),
      f2: require('../../assets/f2.png'),
      f3: require('../../assets/f3.png'),
      f4: require('../../assets/f4.png')
    }
  },
  methods: {
    termFn () {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // 移动端
        this.app = true
      } else {
        // pc端
        this.app = false
      }
    }
  },
  mounted () {
    this.termFn()
  }
}
</script>
<style lang="stylus" scoped>
  .img-box
    width 120px
    height 120px
    background red
    position absolute
    left 50%
    margin-left -60px
    filter Alpha(opacity=0) /* IE */
    -moz-opacity 0    /* FF 主要是为了兼容老版本的FF */
    opacity 0    /* FF */
  .img3
    background url('../../assets/code.png') no-repeat
    display inline-block
    background-size contain
    vertical-align sub
  ul,li
    padding 0
    margin 0
  li
  list-style none
  .flex
    display box
    display -webkit-box
    display -webkit-flex
    display -moz-box
    display -ms-flexbox
    display flex
  .flex1
    -prefix-box-flex 1
    -webkit-box-flex 1
    -webkit-flex 1
    -moz-box-flex 1
    -ms-flex 1
    flex 1
  .flex-c
    -webkit-box-direction normal
    -webkit-box-orient vertical
    -moz-flex-direction column
    -webkit-flex-direction column
    flex-direction column
  .pricing-tables
    -webkit-flex-flow row wrap
    -ms-flex-flow row wrap
    flex-flow row wrap
    -webkit-align-content flex-start
    -ms-flex-line-pack start
    align-content center
  .flex-center
    -webkit-box-align center
    -moz-align-items center
    -webkit-align-items center
    align-items center
  .flex-j-c
    -webkit-box-pack center
    -moz-justify-content center
    -webkit-justify-content center
    justify-content center
  .border-right
    box-sizing: border-box;
    border-right 1px solid #888
.footcon
  background #39393b
.newfoot
  max-width 980px
  margin 0 auto
  padding 20px 0
  color #fff
  p
  ul
    li
      padding 5px 0
      cursor pointer
      position relative
      span
        padding 20px 0
      img
        display block
        max-width 66px
      .img-box:hover
        filter Alpha(opacity=100) /* IE */
        -moz-opacity 100    /* FF 主要是为了兼容老版本的FF */
        opacity 100    /* FF */
  .left
    margin-bottom 20px
  .right
    span
      padding-left 15px
</style>
