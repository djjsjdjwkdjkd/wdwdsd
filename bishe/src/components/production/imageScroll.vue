<template>
  <div class="scroll_wrap_overflow" ref="wrapper">
    <div class="scroll_content" ref="scrollWidth">
      <div class="scroll_wrap">
        <div
          class="scroll_item"
          v-for="(item, index) in showImages"
          :key="index"
        >
          <div class="scroll_img">
            <img :src="item.src" alt="" ref="curImg"/>
          </div>
          <div class="scroll_txt">{{ item.txt }}</div>
        </div>
      </div>
    </div>
    <div class="scroll_bottom_btn" @click="handleToDemo">
      
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      showImages: [
        {
          src: require('@/assets/img/53.png'),
          txt: '哈基米宠物之家成功救助并安置千只流浪动物，荣获“年度最佳动物保护机构”称号',
        },
        {
          src: require('@/assets/img/52.png'),
          txt: '哈基米宠物之家推出全国首个人工智能领养匹配系统，领养率提升50%',
        },
        {
          src: require('@/assets/img/51.png'),
          txt: '哈基米宠物之家携手国际组织，启动“全球流浪动物保护计划”',
        },
        {
          src: require('@/assets/img/55.png'),
          txt: '哈基米宠物之家成功举办首届“宠物康复与心理关怀”国际研讨会，引领行业新方向',
        },
      ],
      scroll: null,
    }
  },
  mounted() {
    //创建BScroll对象并设置参数
    this.scroll = new BScroll(this.$refs.wrapper, {
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
      scrollX: true, //X轴滚动启用
      eventPassthrough:'vertical'
    })
    const scrollXEnd = (this.showImages.length - 2) * this.$refs.curImg[0].width
    this.$refs.scrollWidth.style.width = this.showImages.length * this.$refs.curImg[0].width + 100 + 'px'
    this.scroll.refresh()
    this.scroll.scrollTo(-scrollXEnd,0,10000)
    setTimeout(() => {
      this.scroll.scrollTo(0,0,10000)
    },10000)
  },
  methods: {
    handleToDemo() {
      this.$router.push('/demo')
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll_wrap_overflow {
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .scroll_content {
    .scroll_wrap {
      width: 100%;
      display: flex;
      @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
      }
      .scroll_item {
        width: 450px;
        margin-top: 30px;
        margin-right: 30px;
        flex-shrink: 0;
        @media screen and (max-width: 768px) {
          width: 180px;
          margin-right: 20px;
        }
        .scroll_img {
          width: 100%;
          @media screen and (max-width: 768px) {
            width: 180PX;
          }
          img {
            width: 100%;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
          }
        }
        .scroll_txt {
          color: #646464;
          font-size: 16px;
          margin-top: 30px;
          @media screen and (max-width: 768px) {
            font-size: 15px;
            width: 180PX;
          }
        }
      }
    }
  }
  .scroll_bottom_btn {
    text-align: center;
    .bottom_btn {
      margin-top: 70px;
      background: orange;
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        border-radius: 20px;
        width: 140px;
        height: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>