<template>
  <div class="follow-item pure-g">
    <div class="brief pure-u-1 pure-u-md-1-2" style="max-width:50%;">
      <div class="list" :class="{selected:index === current}" v-for="(item,index) in allData" :key="index" @click="selectModule(index)" owl="app_demo">
        <div v-bind:class="{apporder: app,pcorder:!app}" class="order">{{item.order}}</div>
        <div class="content">
          <span v-bind:class="{apptitle: app,pctitle:!app}" class="title">{{item.title}}</span>
          <span v-bind:class="{apptime: app,pctime:!app}" class="time">
            <i class="process"></i>
          </span>
          <span class="descrption">{{item.descrption}}</span>
        </div>
      </div>
    </div>
    <div class="short-vedio pure-u-1 pure-u-md-1-2">
      <transition name="fade" :duration="2000">
        <li class="inner" v-for="(item,index) in allImg" :key="index" v-if="index === current" >
          <img class="self-img" :src="item.img"/>
        </li>
      </transition>
    </div>
  </div>
</template>
<script>
import { ALL_HOME_LIST_TAB, BUY_EXPLOR_FOLLOW_IMG } from './meta/meta'

export default {
  data () {
    return {
      app:true,
      allData: ALL_HOME_LIST_TAB,
      allImg: BUY_EXPLOR_FOLLOW_IMG,
      current: 0,
      task: ''
    }
  },
  methods: {
    termFn () {
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // 移动端
        this.app = true
      } else {
        // pc端
        this.app = false
      }
    },
    autoPlay () {
      if (this.current > 2) {
        this.current = 0
      } else {
        this.current++
      }
    },
    play () {
      this.task = setInterval(this.autoPlay, 5000)
      // this.task = setInterval(this.autoPlay, 5000000)
    },
    selectModule (index) {
      this.current = index
      clearInterval(this.task)
      this.play()
    }
  },
  mounted () {
    this.play()
    this.termFn()
  }
}
</script>

<style lang="stylus" scoped>
  .pure-g
    display -webkit-box /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
    display -moz-box /* Firefox 17- */
    display -webkit-flex /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
    display -moz-flex /* Firefox 18+ */
    display -ms-flexbox /* IE 10 */
    display flex /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
  .follow-item
    max-width 980px
    margin: 0 auto
    .short-vedio
      margin-top -73px
      .self-img
        max-width 90%
        height auto
        display block
        margin:0 auto
    .brief
      padding-left 10px
      .list
        -webkit-tap-highlight-color transparent
        clear both
        padding-top 47px
        cursor pointer
        .order
          display block
          margin 10px
        .pcorder
          float left
        .apporder
          margin 0 auto
        .content
          float left
          .title
            font-weight 600
            display block
          .time
            width 100px
            height 2px
            background #7f7f7f
            margin 3px 0
            font-size 16px
            display block
          .descrption
            display block
            font-size 1em
        &.selected
          .descrption
            color #0d67ff
          .order
            display block
            color #0d67ff
          .pcorder
            float left
            margin 56px 16px 0 16px
            animation pcorder 5s infinite
          .apporder
            animation apporder 5s infinite
            margin 0 auto
          .time
            height 2px
            background rgba(255,255,255,0.5)
            margin 3px 0
          .pctime
            width 250px
          .apptime
            width:9em
            .process
              background #0d67ff
              height 2px
              display block
              transition width .8s ease
              animation time 5s infinite
          .title
            animation title 5s infinite
            font-weight 600
            color #0d67ff
          .pctitle
            width 290px
            font-size 36px
          .apptitle
            width 100%
            font-size 1em
    .short-vedio
      height -webkit-fill-available
      display block
      .inner
        position absolute
        list-style none
        overflow hidden
  @media only screen and (max-width 1440px)
    .follow-item
      .short-vedio
      .brief
        .list
          margin 47px 0
          &.selected
            .process
              background #0d67ff
              height 2px
              display block
              transition width .8s ease
              animation time 5s infinite
  @media only screen and (min-width 1440px) and (max-width 1920px)
    .follow-item
      .short-vedio
        margin-top -73px
      .brief
        .list
          margin 47px 0
          &.selected
            .process
              background #0d67ff
              height 2px
              display block
              transition width .8s ease
              animation time 5s infinite
      .short-vedio
        .inner
          animation picture 5s infinite
  @media only screen and (min-width 1920px)
    .follow-item
      .short-vedio
        margin-top -100px
      .brief
        .list
          margin 47px 0
          .content
            .time
              width 100px
              height 2px
              margin 3px 0
          &.selected
            .process
              background #0d67ff
              height 2px
              display block
              transition width .8s ease
              animation time 5s infinite
      .short-vedio
        .inner
          animation picture 5s infinite
    @keyframes pctitle
      0%
        font-size 1.2em
      10%
        font-size 3em
      100%
        font-size 3em
    @keyframes apptitle
      0%
        font-size 1.2em
      10%
        font-size 1.2em
      100%
        font-size 1.2em
    @keyframes time
      0%
        width 0
      100%
        width 100%
    @keyframes apporder
      0%
        margin 0 1em 0 1em
      10%
        margin 1.5em 1em 0 1em
      100%
        margin 1.5em 1em 0 1em
    @keyframes pcorder
      0%
        margin 0 16px 0 16px
      10%
        margin 56px 16px 0 16px
      100%
        margin 56px 16px 0 16px

    @keyframes picture
      0%
        opacity 0.2
      30%
        opacity 1
      100%
        opacity 1

  .fade-enter-active, .fade-leave-active
    transition opacity 2s

  .fade-enter, .fade-leave-to, .v-enter-to
    opacity 0
</style>
