<template>
  <div class="sky_wrap">
    <div class="sky_btn">
      <div
        class="sky_item"
        v-for="(item, index) in skyList"
        :key="index"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
      >
        {{ item.tit }}
      </div>
    </div>
    <div class="sky_content">
      <div class="content_left">
        <div class="left_tit">{{ skyTitle }}</div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in skyImgList"
            :key="index"
            ref="iconItem"
          >
            <i :class="item.src"></i>
            <span v-html="item.txt"></span>
          </div>
        </div>
      </div>
      <div class="content_right">
        <img :src="skycurrentImg" alt="" />
        <div class="left_btn hidden-sm-and-up" @click="handleToDeomo">爱心领养</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      skyTitle:
        '无论新手铲屎官还是资深养宠达人，哈基米提供专业宠物顾问服务，从选品到喂养建议，全程陪伴，解决你的养宠难题。',
      skyImgList: [
        {
          src: '',
          txt: '<span style="font-weight:bold;padding-right:10px;">专业指导</span>专业顾问在线指导',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">个性化定制方案</span>每个用户都是VIP体验',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">全程陪伴</span>7*24小时在线，随时解答疑问',
        },
      ],
      skycurrentImg:require('../../assets/img/33342e3d61.png')
    }
  },
  props: {
    skyList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 1:
          this.skyTitle =
            '订阅哈基米定期购服务，猫粮、猫砂、零食等常用品自动配送，还能享受专属折扣。智能提醒功能，再也不怕毛孩断粮啦！'
          this.skyImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">量身定制，精准匹配</span>根据宠物品种、年龄、体重、健康状况等，提供专属饮食方案、用品推荐，解决挑食、过敏等个性化问题',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">科学配方，健康无忧</span>由宠物营养专家团队研发，精选天然原料，科学配比，确保每一份定制产品都能满足毛孩的营养需求，守护TA的健康成长',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">灵活调整，动态优化</span>随着宠物年龄增长或健康状况变化，专属顾问会定期跟进，动态调整定制方案',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">省心省力，一键下单</span>定制方案确认后，一键下单，定期配送，省去挑选烦恼，让铲屎官轻松养宠',
            },
          ]
          this.skycurrentImg = require('../../assets/img/222.a7a2174.png')
          break
        case 2:
          this.skyTitle =
            '哈基米承诺30天无理由退换货服务，品质问题免费退换，让铲屎官买得放心、用得安心。还有24小时在线客服，随时为你解答疑问。'
          this.skyImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">购物零风险，放心尝试</span>0天内，无论产品是否拆封、使用，均可无理由退换',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">品质保障，售后无忧</span>哈基米承诺，若因产品质量问题导致退换，全程免运费，快速处理',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">提升用户体验，增强信任感</span>无理由退换服务彰显品牌对产品的信心，也让用户感受到哈基米的诚意与责任感',
            },
          ]
          this.skycurrentImg = require('../../assets/img/111.855fbdc (1).png')
          break
        default:
          this.skyTitle =
            '无论新手铲屎官还是资深养宠达人，哈基米提供专业宠物顾问服务，从选品到喂养建议，全程陪伴，解决你的养宠难题。'
          this.$refs.iconItem.map(v=>{
            v.style.width = '90%'
          })
          this.skyImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">专业指导</span>专业顾问在线指导',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">个性化定制方案</span>每个用户都是VIP体验',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">全程陪伴</span>7*24小时在线，随时解答疑问',
            },
          ]
          this.skycurrentImg = require('../../assets/img/33342e3d61.png')
          break
      }
    },
    handleToDeomo(){
      this.$router.push('/demo')
    }
  },
}
</script>

<style lang="scss" scoped>
.sky_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;
  @media screen and (max-width: 768px) {
    width: 95%;
    background: #f7f7f7;
  }
  .sky_btn {
    width: 100%;
    display: flex;
    .sky_item {
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
        font-size: 13px;
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
  .sky_content {
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
          width: 90%;
          height: 50px;
          @media screen and (max-width: 768px) {
            height: 50px;
          }
          i {
            color: #7bbde3;
            @media screen and (max-width: 768px) {
              font-size: 20px;
            } 
          }
          span {
            color: #646464;
             @media screen and (max-width: 768px) {
              font-size: 14px;
            }
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
        cursor: pointer;
        @media screen and (max-width: 768px) {
          width: 120px;
          height: 35px;
          font-size: 14px;
          border-radius: 20px;
          margin: 20px auto;
          cursor: pointer;
        }
      }
    }
  }
}
</style>