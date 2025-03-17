<template>
  <div class="production_wrap">
    <div class="production_img">
      <div class="img_tit">宠物之家</div>
      <div class="img_desc">专业呵护，贴心陪伴，宠物之家为您守护</div>
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="production_title">什么是宠物之家</div>
          <div class="production_desc">两大核心领域</div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="production_box">
      <div class="production_item">
        <div class="item_left">
          <img src="../../assets/img/11feef877.png" alt="" />
        </div>
        <div class="item_right">
          <div class="right_tit">宠物寄养与照料</div>
          <div class="right_desc">
            提供短期或长期的宠物寄养服务，确保宠物在主人外出时得到专业的照顾，包括日常喂养、清洁、遛狗、健康监测等服务，让宠物在舒适的环境中生活。
          </div>
        </div>
      </div>
      <div class="production_item">
        <div class="item_left">
          <img src="../../assets/img/12.74947a2 (1).png" alt="" />
        </div>
        <div class="item_right">
          <div class="right_tit">宠物健康与医疗服务</div>
          <div class="right_desc">
            提供基础的健康检查、疫苗接种、驱虫、疾病治疗等服务，与专业兽医合作，确保宠物的身体健康，并提供紧急医疗支持。
          </div>
        </div>
      </div>
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width:40%;">
          <div class="production_title">宠物之家核心组件</div>
          <div class="production_desc">
            用心呵护，让每一只宠物都找到家的感觉
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <p>宠物寄养与照料</p>
    <div class="production_core_scene"></div>
    <div class="production_card">
      <ProCard :procardList="procardList" />
    </div>
    <p>宠物健康与医疗服务</p>
    <div class="production_card">
      <ProCard2 :procardList="procardList2" />
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 40%;">
          <div class="production_title">四大优势，用心呵护</div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="advantage_out_wrap">
      <AdvantageCard />
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 60%">
          <div class="production_title">
            哈基米宠物之家：创新智能养宠，开启宠物生活新篇章！
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <imageScroll />
    <div class="product_shows_wrap">
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="production_title">客户见证</div>
            <div class="production_desc">
              万千宠主的选择，品质服务的保证
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="with_center">
        <div class="bottom_img_wrap">
          <div
            class="bottom_img_item"
            v-for="(item, index) in procardList3"
            :key="index"
          >
            <h2 class="hidden-xs-only">{{ item.tit }}</h2>
            <div class="bottom_img">
              <img :src="item.src" alt="" />
              <div class="img_desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallMe />
    <MobileCallme />
  </div>
</template>

<script>
import ProCard from './ProCard.vue'
import ProCard2 from './ProCard2.vue'
import AdvantageCard from './AdvantageCard.vue'
import imageScroll from './imageScroll.vue'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  data() {
    return {
      procardList: [
        {
          tit: '日常喂养与饮水',
        },
        {
          tit: '清洁与卫生管理',
        },
        {
          tit: '运动与活动安排',
        },
        {
          tit: '健康监测与护理',
        },
        {
          tit: '情感陪伴与心理关怀',
        },
      ],
      procardList2: [
        {
          tit: '日常健康管理',
        },
        {
          tit: '疾病治疗与应急护理',
        },
      ],
      procardList3: [
        {
          tit: '哈基米宠物之家（北京朝阳店）',
          desc: '用心服务，用爱呵护',
          src: require('@/assets/img/home/61.png'),
        },
        {
          tit: ' 哈基米宠物之家（上海浦东店）',
          desc: '聆听爱的声音，见证幸福时刻',
          src: require('@/assets/img/62 (1).png'),
        },
        {
          tit: '哈基米宠物之家（广州天河店）',
          desc: ' 真实口碑，品质见证',
          src: require('@/assets/img/63 (1).png'),
        },
        {
          tit: ' 哈基米宠物之家（深圳福田店）',
          desc: '专业团队，贴心服务，口碑之选',
          src: require('@/assets/img/64 (1).png'),
        },
        {
          tit: '哈基米宠物之家（杭州西湖店）',
          desc: '用心呵护，收获爱与信赖',
          src: require('@/assets/img/66.png'),
        },
        {
          tit: '哈基米宠物之家（成都武侯店）',
          desc: '宠主说好，才是真的好',
          src: require('@/assets/img/65 (1).png'),
        },
      ],
    }
  },
  components: {
    ProCard,
    ProCard2,
    AdvantageCard,
    imageScroll,
    CallMe,
    MobileCallme,
  },
}
</script>

<style lang="scss" scoped>
.production_wrap {
  width: 100%;
  .production_img {
    width: 100%;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 50vw;
    }
    background: url('../../assets/img/banner1104.png') 0 0 no-repeat;
    background-size: 100% 100%;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .img_tit {
      font-size: 60px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    .img_desc {
      font-size: 32px;
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        font-size: 0.85rem;
      }
    }
    .img_btn {
      width: 180px;
      height: 50px;
      border: solid 1px rgb(255, 166, 0);
      background: rgba(25, 166, 0, 0.1);
      color: orange;
      position: absolute;
      bottom: 15%;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        color: #fff;
        background: orange;
      }
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 30px;
        font-size: 14px;
      }
    }
  }
  .production_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .production_inner {
      display: flex;
      justify-content: center;
      .inner_left {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media screen and (max-width: 768px) {
          flex: 1;
        }
        img {
          width: 30%;
        }
      }
      .inner_center {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        @media screen and (max-width: 768px) {
          flex: 2.2;
        }
        .production_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .production_desc {
          font-size: 16px;
          color: #787878;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
      .inner_right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media screen and (max-width: 768px) {
          flex: 1;
        }
        img {
          width: 30%;
        }
      }
    }
  }
  .production_box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .production_item {
      width: 30%;
      display: flex;
      margin-left: 80px;
      @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: 0;
        margin-top: 20px;
      }
      .item_left {
        width: 50%;
        padding: 0 30px;
        img {
          width: 100%;
        }
      }
      .item_right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @media screen and (max-width: 768px) {
          margin-left: 10px;
        }
        .right_tit {
          font-weight: bold;
          font-size: 26px;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .right_desc {
          color: #717171;
          font-size: 16px;
          @media screen and (max-width: 768px) {
            font-size: 0.8rem;
            line-height: 18px;
          }
        }
      }
    }
  }
  p {
    text-align: center;
    color: #3b3b3b;
    font-weight: bold;
    font-size: 20px;
    line-height: 100px;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      padding: 15px 0;
    }
  }
  .production_card {
    display: flex;
    justify-content: center;
  }
  .advantage_out_wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .carousel_pro {
    width: 60%;
    margin: 60px auto;
    .carousel_pro_item {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .product_shows_wrap {
    width: 100%;
    background: url('../../assets/img/witness-bgc369221.png') 0 0 no-repeat;
    background-size: cover;
    padding: 10px 0 50px 0;
    margin-top: 100px;
    box-sizing: border-box;
    .with_center {
      display: flex;
      justify-content: center;
      .bottom_img_wrap {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        .bottom_img_item {
          width: 30%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin: 20px;
          h2 {
            color: #3b3b3b;
          }
          @media screen and (max-width: 768px) {
            width: 45%;
          }
          .bottom_img {
            width: 100%;
            position: relative;
            img {
              width: 100%;
            }

            .img_desc {
              position: absolute;
              bottom: 20px;
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 18px;
              @media screen and (max-width: 768px) {
                font-weight: bold;
                bottom: 8px;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>