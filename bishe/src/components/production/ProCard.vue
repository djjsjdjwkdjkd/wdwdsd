<template>
  <div class="procard_wrap">
    <div class="procard_btn">
      <div
        class="procard_item"
        v-for="(item, index) in procardList"
        :key="index"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
      >
        {{ item.tit }}
      </div>
    </div>
    <div class="procard_content">
      <div class="content_left">
        <div class="left_tit">{{ procardTitle }}</div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in procardImgList"
            :key="index"
            ref="iconItem"
          >
            <i :class="item.src" class="iconfont"></i>
            <span>{{ item.txt }}</span>
          </div>
        </div>
        
      </div>
      <div class="content_right">
        <img :src="procardImg" alt="" />
        <router-link class="left_btn hidden-sm-and-up" to="/demo"
          >了解详情</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      procardTitle:
        '根据宠物的饮食习惯和健康需求，提供定时定量的食物和清洁的饮用水。针对特殊饮食需求（如处方粮、过敏食物等）进行个性化安排。',
      procardImg: require('@/assets/img/government-right-1.png'),
      procardImgList: [
        {
          src: 'icon-chengshi',
          txt: '定时',
        },
        {
          src: 'icon-chengshi1',
          txt: '定量',
        },
        {
          src: 'icon-zhengfufeiyinglijigou',
          txt: '营养',
        },
        {
          src: 'icon-ren',
          txt: '清洁',
        },
        {
          src: 'icon-chanpin',
          txt: '新鲜',
        },
        {
          src: 'icon-zhengce',
          txt: '个性化',
        },
      ],
    }
  },
  props: {
    procardList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 1:
          this.procardTitle =
            '定期清理宠物的生活区域，包括笼舍、猫砂盆、垫子等，确保环境干净卫生。为宠物提供洗澡、梳毛等基础清洁服务，保持宠物身体整洁。'
          this.procardImg = require('../../assets/img/government-right-2.png')
          this.procardImgList = [
            {
              src: 'icon-kehuishouwu-feizhilei',
              txt: '生活区域清洁',
            },
            {
              src: 'icon-houmenjiance',
              txt: '宠物身体清洁',
            },
            {
              src: 'icon-weibiaoti1',
              txt: '消毒与疾病预防',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='100%'
          })
          break
        case 2:
          this.procardTitle =
            '为狗狗提供定时遛狗服务，确保它们有足够的运动量和户外活动时间。为猫咪和其他小动物提供互动玩具和活动空间，满足它们的玩耍需求。'
          this.procardImg = require('../../assets/img/government-right-3.png')
          this.procardImgList = [
            {
              src: 'icon-ditu',
              txt: 'GPS定位',
            },
            {
              src: 'icon-balance-full',
              txt: '配有监控可随时探望',
            },
          ]
          break
        case 3:
          this.procardTitle =
            '观察宠物的精神状态、食欲和排泄情况，及时发现异常并采取相应措施。提供基础护理服务，如剪指甲、清理耳朵、刷牙'
          this.procardImg = require('../../assets/img/government-right-4.png')
          this.procardImgList = [
            {
              src: 'icon-icon-test',
              txt: '日常健康观察',
            },
            {
              src: 'icon-tuceng',
              txt: '基础护理服务',
            },
            {
              src: 'icon-zhaochengguo',
              txt: '疾病预防与应急处理',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='30%'
          })
          break
        case 4:
          this.procardTitle =
            '观察宠物的精神状态、食欲和排泄情况，及时发现异常并采取相应措施。提供基础护理服务，如剪指甲、清理耳朵、刷牙'
          this.procardImg = require('../../assets/img/government-right-5.png')
          this.procardImgList = [
            {
              src: 'icon-yuan',
              txt: '每日互动时间',
            },
            {
              src: 'icon-yuan',
              txt: '个性化陪伴',
            },
            {
              src: 'icon-yuan',
              txt: '熟悉物品陪伴',
            },
            {
              src: 'icon-yuan',
              txt: '环境丰富化',
            },
            {
              src: 'icon-yuan',
              txt: '渐进适应新环境',
            },
            {
              src: 'icon-yuan',
              txt: '情绪观察与安抚',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='30%'
          })
          break
        default:
          this.procardTitle =
            '根据宠物的饮食习惯和健康需求，提供定时定量的食物和清洁的饮用水。针对特殊饮食需求（如处方粮、过敏食物等）进行个性化安排。'
          this.procardImg = require('../../assets/img/government-right-1.png')
          this.procardImgList = [
            {
              src: 'icon-chengshi',
              txt: '定时',
            },
            {
              src: 'icon-chengshi1',
              txt: '定量',
            },
            {
              src: 'icon-zhengfufeiyinglijigou',
              txt: '营养',
            },
            {
              src: 'icon-ren',
              txt: '清洁',
            },
            {
              src: 'icon-chanpin',
              txt: '新鲜',
            },
            {
              src: 'icon-zhengce',
              txt: '政策档案',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='30%'
          })
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.procard_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;
  @media screen and (max-width: 768px) {
    width: 95%;
    background: #f7f7f7;
  }
  .procard_btn {
    width: 100%;
    display: flex;
    .procard_item {
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
        font-size: 12px;
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
  .procard_content {
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
        line-height: 1.5rem;
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
          width: 30%;
          height: 50px;
          display: flex;
          align-items: center;
          @media screen and (max-width: 768px) {
            height: 50px;
          }
          i {
            color: #7bbde3;
            font-size: 24px;
            @media screen and (max-width: 768px) {
              font-size: 20px;
            }
          }
          span {
            color: #646464;
            font-size: 16px;
            padding: 0 10px;
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }
        }
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
      }
    }
    .content_right {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
      text-align: right;
      img {
        margin-top: 30px;
        width: 50%;
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
          width: 90px;
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