<template>
  <div class="f-content">
    <div class="f-main flex-flow-row pure-g">
      <div class="left pure-u-1 pure-u-md-1-2">
        <!--<img v-bind:class="{tbtlogo:istbtlogo,applogo:isapplogo}" class="tbt-logo" src="../../assets/tbt_logo.png">-->
        <img v-bind:class="{tbtlogo:!app,applogo:app}" class="tbt-logo" v-lazy="logo">
        <h2 v-show="app">客观动态的项目评级平台</h2>
        <div v-show="!app" class="bottom" ><span>{{text}}</span></div>
        <div v-show="!app" class="btn-item">
          <a class="btn" :class="{'add-border':isBorderios}" owl="ios_download">
            <div @mouseenter="showIos()" class="inner-btn">
              <span class="content">iOS 版</span>
              <i class="ewm" ></i>
            </div>
            <div class="layer" @mouseleave="closeIos()" v-show="iospopShow">
              <div class="inner-btn back-black">
                <span class="content">iOS 版</span>
                <i class="ewm" ></i>
              </div>
              <div class="detail">
                <img src="//ci.xiaohongshu.com/326e7c5d-5e1f-4a3f-8a96-86f676e3a856"/>
              </div>
            </div>
          </a>
          <a class="btn" :class="{'add-border':isBorderand}" owl="android_download">
            <div @mouseenter="showAndroid()" class="inner-btn">
              <span class="content">Android 版</span>
              <i class="ewm"></i>
            </div>
            <div class="layer" @mouseleave="closeAndroid()" v-show="androidpopShow">
              <div class="inner-btn back-black">
                <span class="content">Android 版</span>
                <i class="ewm"></i>
              </div>
              <div class="detail">
                <img src="//ci.xiaohongshu.com/326e7c5d-5e1f-4a3f-8a96-86f676e3a856"/>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="right pure-u-1 pure-u-md-1-2">
        <div class="carousel">
          <ul class="slide">
            <li>
              <img class="pure-img" v-lazy="banner01" alt="">
            </li>
          </ul>
          <button v-if="app" class="pure-button btn-download">立刻下载App</button>
        </div>
        <!-- <vacancy-pic
          :banner-url="bannerUrl"
        ></vacancy-pic> -->
      </div>
    </div>
  </div>
</template>
<script>
import VacancyPic from '../Common/VacancyPic.vue'
export default {
  data () {
    return {
      logo: require('../../assets/tbt_logo.png'),
      banner01: require('../../assets/banner01.png'),
      app: true, // true移动端
      isapplogo: true,

      iospopShow: false,
      androidpopShow: false,
      isBorderios: true,
      isBorderand: true,
      content: [
        {
          name: '客观动态的',
          width: '358'
        },
        {
          name: '项目评级平台',
          width: '395'
        }
        // {
        //   name: ' ',
        //   width: '395'
        // },
        // {
        //   name: ' ',
        //   width: '375'
        // }
      ],
      index: 0,
      indexText: 1,
      text: ''
    }
  },
  components: {
    VacancyPic
  },
  props: {
    bannerUrl: {
      type: Array,
      default: () => ([])
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
    },
    play () {
      this.typePlay()
      this.deletePlay()
      this.typetask = setInterval(this.typePlay, 200)
      this.deletetask = setInterval(this.deletePlay, 6000)
    },
    typePlay () {
      if (this.indexText > this.content[this.index].name.length + 1) {
        // this.index = this.index >= 3 ? 0 : this.index + 1
        this.index = this.index >= 1 ? 0 : this.index + 1
        this.indexText = 1
      }
      this.text = this.content[this.index].name.slice(0, this.indexText)
      this.indexText += 1
    },
    deletePlay () {
      if (!(this.indexText > this.content[this.index].name.length + 1)) {
        this.text = this.content[this.index].name.slice(0, this.indexText)
        this.indexText += 1
      }
    },
    showIos () {
      this.iospopShow = true
      this.isBorderios = false
      this.androidpopShow = false
      this.isBorderand = true
    },
    closeIos () {
      this.iospopShow = false
      this.isBorderios = true
    },
    showAndroid () {
      this.androidpopShow = true
      this.isBorderand = false
      this.iospopShow = false
      this.isBorderios = true
    },
    closeAndroid () {
      this.androidpopShow = false
      this.isBorderand = true
    }
  },
  beforeDestoryed () {
    clearInterval(this.typetask)
    clearInterval(this.deletetask)
  },
  mounted () {
    this.play()
    this.termFn()
  }
}
</script>

<style lang="stylus" scoped>
  .btn-download
    margin 3em auto .5em auto
    background black
    color white
    border-radius 4px
    text-shadow 0 1px 1px rgba(0, 0, 0, 0.2)
    -webkit-tap-highlight-color transparent
  .carousel
    vertical-align top
  .slide
    margin-bottom 30px
  .tbtlogo
    display block
    vertical-align left
    margin-bottom 24px
  .applogo
    margin 0 auto
    display block
    vertical-align left
    margin-bottom 24px
  .clear
    clear both
  .bottom
    display inline-block
    width auto
    span
      vertical-align middle
      display inline-block
    &:after
      content ''
      width 5px
      height 53px
      display inline-block
      background #000
      animation blink 1s infinite
      vertical-align middle
      margin-top 2px

  @keyframes blink
    0%
      opacity 1
      30%
      opacity 0
      100%
      opacity 1
  .f-content
    background #fff
    padding-top: 36px;
    margin 0 auto
    .f-main
      max-width 980px
      margin 0 auto
      margin-bottom 3.125em;
  .left
    .top
      font-size 48px
      font-weight bold
      margin 0
    .bottom
      font-size 48px
      font-weight 500
      margin -7px 0 10px 0
    .btn-item
      margin-top 57px
      .btn
        width 150px
        height 40px
        display block
        background #000
        text-align center
        line-height 40px
        border-top-left-radius 4px
        border-top-right-radius 4px
        font-size 16px
        color #fff
        float left
        margin-right 10px
        position relative
        &.add-border
          border-bottom-left-radius 4px
          border-bottom-right-radius 4px
        .layer
          position absolute
          top 0
          left 0
          border-radius 4px
        .inner-btn
          cursor pointer
          display flex
          &.back-black
            background #000
            border-top-left-radius 4px
            border-top-right-radius 4px
          .content
            flex 1
            text-align center
          .ewm
            background url('//ci.xiaohongshu.com/e76b6082-be01-44bc-b317-049dbb6f63b2') no-repeat
            width 20px
            height 20px
            display inline-block
            background-size contain
            vertical-align sub
            margin 10px 10px 10px  0
        .detail
          background #000
          padding 0 14px 14px 14px
          border-bottom-left-radius 4px
          border-bottom-right-radius 4px
          img
            width 122px
            height 122px
            display block
    .type-photo
      width 248px
      height 16px
      display block
</style>
