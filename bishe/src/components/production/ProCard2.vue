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
        <div class="left_tit" v-html="procardTitle"></div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in procardImgList"
            :key="index"
            ref="iconItem"
            slot="reference"
          >
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.tip"
              placement="top-start"
              :disabled="disableTips"
            >
              <div>
                <i :class="item.src" class="iconfont"></i>
                <span v-html="item.txt"></span>
              </div>
            </el-tooltip>
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
        '云逸选址平台 支持一键入园<br/>实现生物医药产业园区 可查、可看、可比、可询<br/>全球生物医药企业入华选址门户',
      procardImg: require('@/assets/img/market-right-1.png'),
      procardImgList: [
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">2000+</span>生物医药产业园区',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100000+</span>行业资讯',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">1000+</span>政策',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100+</span>行业学/协会资源',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">4100+</span>投资机构信息',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold;color:#000;padding-right:5px;">6</span>大维度量化',
        },
      ],
      disableTips:true,
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
            '与专业兽医合作，为患病宠物提供诊断和治疗服务，包括药物治疗、伤口处理等。配备基础医疗设备和药品，能够在紧急情况下（如中毒、外伤等）提供初步处理，并及时联系兽医进行进一步治疗。'
          this.procardImg = require('../../assets/img/government-right-2.png')
          this.procardImgList = [
            {
              src: 'icon-kehuishouwu-feizhilei',
              txt: '专业兽医',
              tip:'疾病诊断精准、治疗方案科学，提供从轻症到复杂病症的全程医疗支持300+SMO、全国临床GCP机构PI等相关临床及注册资源'
            },
            {
              src: 'icon-yingxiao',
              txt: '24小时应急响应机制',
              tip:'全天候待命的护理团队，可快速应对突发状况'
            },
            {
              src: 'icon-leijishufuwux',
              txt: '基础医疗设备与药品储备',
              tip:'常备常用药品，应对常见健康问题，避免延误治疗'
            },
          ]
          this.$refs.iconItem.map((v) => {
            v.style.width = '30%'
          })
          this.disableTips = false
          break
        case 0:
          this.procardTitle = `定期为宠物进行基础健康检查，包括体温、体重、皮肤、毛发和牙齿等，及时发现潜在问题。按照兽医建议，为宠物接种必要的疫苗，预防常见传染性疾病（如犬瘟热、猫瘟等）。定期进行体内外驱虫，防止寄生虫感染，保障宠物健康。`
          this.procardImg = require('../../assets/img/market-right-1.png')
          this.procardImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">2000+</span>生物医药产业园区',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100000+</span>行业资讯',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">1000+</span>政策',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100+</span>行业学/协会资源',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">4100+</span>投资机构信息',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;color:#000;padding-right:5px;">6</span>大维度量化',
            },
          ]
          this.disableTips = true
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
      width: 45%;
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
        justify-content: space-around;
        padding-bottom: 30px;
        @media screen and (max-width: 768px) {
          justify-content: space-around;
        }
        .icon_item {
          width: 30%;
          height: 50px;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          box-shadow: 10px 10px 20px rgba($color: #000000, $alpha: 0.1);
          padding: 5px;
          box-sizing: content-box;
          cursor: pointer;
          &:nth-child(n + 4) {
            margin-top: 1rem;
          }
          @media screen and (max-width: 768px) {
            height: 50px;
            justify-content: center;
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