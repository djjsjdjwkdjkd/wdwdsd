<template>
  <div class="consult_wrap">
    <div class="consult_btn">
      <div
        class="consult_item"
        v-for="(item, index) in consultList"
        :key="index"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
      >
        {{ item.tit }}
      </div>
    </div>
    <div class="consult_content">
      <div class="content_right">
        <img :src="consultImg" alt="" />
        <div class="left_btn hidden-sm-and-up" @click="gotoDemo">详情</div>
      </div>
      <div class="content_left">
        <div class="left_tit">{{ consultTitle }}</div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in consultImgList"
            :key="index"
            ref="iconItem"
          >
            <i :class="item.src" class="iconfont"></i>
            <span>{{ item.txt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      consultTitle:
        '为流浪、受伤的或者被遗弃的动物提供临时或长期的庇护,发现需要医疗救助的动物后，评估其健康状况和处境。',
      consultImgList: [
        {
          src: 'icon-lingxing',
          txt: '医疗护理',
        },
        {
          src: 'icon-lingxing',
          txt: '临时安置',
        },
        {
          src: 'icon-lingxing',
          txt: '寻找领养家庭',
        },
        {
          src: 'icon-lingxing',
          txt: '后续跟进',
        },
      ],
      consultImg:require('../../assets/img/book.png')
    }
  },
  props: {
    consultList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 1:
          this.consultTitle =
            '授宠以鱼不如授宠以渔，设立培训机构培养让流浪动物更亲近人'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '行为训练课程',
            },
            {
              src: 'icon-lingxing',
              txt: '健康管理',
            },
            {
              src: 'icon-lingxing',
              txt: '品德教育',
            },
            {
              src: 'icon-lingxing',
              txt: '技能培训',
            },
          ]
          this.consultImg = require('../../assets/img/gh.png')
          break
        case 2:
          this.consultTitle =
            '为可怜的流浪动物撑起一个避风港'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '提供宠物食物',
            },
            {
              src: 'icon-lingxing',
              txt: '医疗护理',
            },
          ]
          this.consultImg = require('../../assets/img/pg.png')
          break
        case 3:
          this.consultTitle =
            '不是一味的养着流浪动物而是为构建一个可以自力更生的良性循环'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '猫咖就业',
            },
            {
              src: 'icon-lingxing',
              txt: '导盲犬培训',
            },
            {
              src: 'icon-lingxing',
              txt: '送往动物园',
            },
          ]
          this.consultImg = require('../../assets/img/jd.png')
          break
        case 4:
          this.consultTitle =
            '为您的爱心捐献提供一份荣誉证书，感谢您的帮助'
          this.consultImgList = [
           
          ]
          this.consultImg = require('../../assets/img/zt.png')
          break
        default:
          this.consultTitle =
            '为流浪、受伤的或者被遗弃的动物提供临时或长期的庇护,发现需要医疗救助的动物后，评估其健康状况和处境。'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '医疗护理',
            },
            {
              src: 'icon-lingxing',
              txt: '临时安置',
            },
            {
              src: 'icon-lingxing',
              txt: '寻找领养家庭',
            },
            {
              src: 'icon-lingxing',
              txt: '后续跟进',
            },
          ]
          this.consultImg = require('../../assets/img/book.png')
          break
      }
    },
    gotoDemo(){
      this.$router.push('/demo')
    }
  },
}
</script>

<style lang="scss" scoped>
.consult_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;
  @media screen and (max-width: 768px) {
    width: 95%;
    background: #f7f7f7;
  }
  .consult_btn {
    width: 100%;
    display: flex;
    .consult_item {
      flex: 1;
      height: 80px;
      background: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      position: relative;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        height: 60px;
        text-align: center;
        font-size: 14px;
      }
    }
    .active {
      color: #fff;
      background: #2091d3;
      font-weight: bold;
      &::before {
        content: '▲';
        position: absolute;
        color: #2091d3;
        font-size: 40px;
        transform: rotateX(180deg);
        bottom: -27px;
      }
    }
  }
  .consult_content {
    width: 100%;
    display: flex;
    padding: 30px;
    justify-content: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .content_left {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .left_tit {
        color: #2d3937;
        font-size: 17px;
        min-height: 90px;
        line-height: 20PX;
        @media screen and (max-width: 768px) {
          font-size: 0.9rem;
          padding: 10px 20px;
          color: #646464;
        }
      }
      .left_icon_wrap {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 30px;
        @media screen and (max-width: 768px) {
          justify-content: center;
        }
        .icon_item {
          width: 45%;
          height: 50px;
          &:nth-child(n+3){
            margin-top: 10px;
          }
          @media screen and (max-width: 768px) {
            height: 50px;
          }
          i {
            color: #FDBA5D;
            font-size: 16PX;
            padding-right: 10px;
          }
          span {
            color: #646464;
            font-size: 14PX;
          }
        }
      }
      .left_btn {
        width: 150PX;
        height: 40PX;
        background: orange;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
      }
    }
    .content_right {
      width: 40%;
      margin-right: 100px;
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
      text-align: right;
      img {
        margin-top: 30px;
        width: 80%;
      }
      .left_btn {
        width: 180px;
        height: 50px;
        background: orange;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
        @media screen and (max-width: 768px) {
          width: 120px;
          height: 35px;
          font-size: 14px;
          border-radius: 20px;
          margin: 20px auto;
        }
      }
    }
  }
}
</style>