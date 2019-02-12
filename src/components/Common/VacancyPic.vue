<template>
<div>
  <div class="carousel">
    <transition-group tag="ul" class="slide" name="image" >
      <li v-for="(item,index) in img" :key="index">
          <img :src="item.url" @click="handlerClick(item.link)"/>
      </li>
    </transition-group>
    <div class="bullet" v-if="img.length > 1">
      <div class="order">
        <span class="now">
          <span class="num">0</span>{{mark+1}}
        </span>
        <i class="line"></i>
        <span class="all">
          <span class="num">0</span>{{img.length}}
        </span>
      </div>
      <div class="progress">
        <span :style="{width: progress+ '%'}" :class="{'time':timeInfo}"></span>
      </div>
      <div class="switch">
        <span class="left" @click="changeLeft(mark)"></span>
        <span class="right" @click="changeRight(mark)"></span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
const ANIMATION_TIME = 5000

export default {
  data() {
    return {
      mark: 0,
      progress: 0, // 进度条
      timeInfo: true // 触发进度条
    }
  },
  props: {
    bannerUrl: {
      type: Array,
      default: () => ([{
        url: '../../assets/banner01.png'
      }])
    },
  },
  computed: {
    img () {
      return this.bannerUrl ? this.bannerUrl : []
    }
  },
  methods: {
    changeLeft (mark) {
      this.timeInfo = false
      if (mark <= 0) {
        this.mark = this.img.length - 1
      } else {
        this.mark = mark - 1
      }
      setTimeout(() => {
        this.timeInfo = true
      })
    },
    changeRight (mark) {
      this.timeInfo = false
      if (mark + 1 >= this.img.length) {
        this.mark = 0
      } else {
        this.mark = mark + 1
      }
      setTimeout(() => {
        this.timeInfo = true
      })
    },
    handlerClick(link) {
      if (link) {
        window.open(link)
      }
    },
    change (index) {
      this.mark = index
    },
    autoPlay () {
      this.mark++
      if (this.mark === this.img.length) {
        this.mark = 0
      }
      this.progress = 0
    },
    play () {
      setInterval(this.autoPlay, ANIMATION_TIME)
    }
  },
  mounted () {
    this.play()
  }
}
</script>
<style lang="stylus" scoped>
.carousel
  width 500px
  height 300px
  margin 0 auto
  overflow hidden
  position relative
.bullet
  width 100%
  position absolute
  bottom 0
  margin 0 auto
  text-align center
  z-index 10
  .order
    font-size 14px
    float left
    margin-left 23px
    .now
      font-weight 500
      color #000
    .line
      height 14px
      width 1px
      display inline-block
      background #999
      vertical-align middle
      margin 0 6px
      transform rotate(40deg)
    .all
      color #999
  .progress
    float left
    margin-left 20px
    margin-top 10px
    width 300px
    height 2px
    background #E6E6E6
    position relative
    .time
      display block
      height 2px
      background #000
      transition width .8s ease
      animation progressbar 5s infinite
  .switch
    .left
      width 18px
      height 9px
      display inline-block
      background-size contain
      cursor pointer
      margin-right 9px
    .right
      width 18px
      height 9px
      display inline-block
      background-size contain
      cursor pointer
span.active
  background rgba(255,255,255,0.5)
.image-enter-active
	transform translateX(0)
	transition all 1s ease
.image-leave-active
	transform translateX(-100%)
	transition all 1s ease
.image-enter
	transform translateX(100%)
.image-leave
	transform translateX(0)
.onebanner
	max-width 1440px
	margin 0 auto
  display block
@keyframes progressbar
  from 
    width 0
  to
    width 100%    
</style>
