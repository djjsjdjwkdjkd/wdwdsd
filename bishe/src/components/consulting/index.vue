<template>
  <div class="consult_wrap">
    <div class="consult_img">
      <div class="img_tit">流浪动物公益</div>
      <div class="img_desc">
        您的爱心将会拯救这些无家可归的小生命
      </div>
    </div>
    <div class="consult_title_wrap">
      <div class="consult_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 40%">
          <div class="consult_title">哈基米公益介绍</div>
          <div class="consult_desc">
            为流浪动物提供全方位的帮助
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="consult_card_wrap">
      <ConsultCard :consultList="consultList" />
    </div>
    <div class="consult_title_wrap">
      <div class="consult_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 40%">
          <div class="consult_title">哈基米公益独特优势</div>
          <div class="consult_desc"></div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="func_wrap hidden-xs-only" style="background: #f4f9fc">
      <div class="func_wrap_inner">
        <div class="func_tit">三大核心保障</div>
      </div>
      <div class="double_card_wrap">
        <el-row class="double_card" type="flex">
          <el-col :span="7" :xs="11" class="double_card_item">
            <div class="double_card_bg">社区支持</div>
            <p>宠物食品银行：为经济困难的家庭提供低廉且优质的宠物食品</p>
          </el-col>
          <el-col :span="7" :xs="11" class="double_card_item">
            <div class="double_card_bg">辅助动物</div>
            <p>设置培训机构为残障人士或有特殊需求的人提供辅助动物</p>
          </el-col>
          <el-col :span="7" :xs="11" class="double_card_item">
            <div class="double_card_bg">国际合作</div>
            <p>和其他国家的动物保护组织合作，参与国际救援</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="func_wrap_mobile hidden-sm-and-up">
      <img src="@/assets/img/ys.png" alt="">
    </div>
    <div class="appointment_wrap">
      <div class="appointment_txt">
        <h1>想要了解更多<br/>公益相关的资讯</h1>
        <p>请拨打我们的咨询热线 400-000-0000</p>
      </div>
    </div>
    <div class="product_shows_wrap">
      <div class="consult_title_wrap">
        <div class="consult_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="consult_title">客户见证</div>
            <div class="consult_desc">
              全国各地150+政府与产业园合作成功案例
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
            v-for="(item, index) in procardList"
            :key="index"
          >
            <div class="bottom_img">
              <img :src="item.src" alt="" />
              <div class="img_desc">{{ item.tit }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallMe/>

    <BoottomTab/>
  </div>
</template>

<script>
import ConsultCard from './ConsultCard.vue'
import CallMe from '@/components/callme/index'
import BoottomTab from './BoottomTab.vue'
export default {
  data() {
    return {
      consultList: [
        {
          tit: '救助',
        },
        {
          tit: '教育',
        },
        {
          tit: '收容',
        },
        {
          tit: '就业',
        },
        {
          tit: '证书',
        },
      ],
      procardList: [
        {
          tit: '上海市哈基米救助基地',
          desc: '',
          src: require('@/assets/img/a.png'),
        },
        {
          tit: '北京市哈基米救助基地',
          desc: '',
          src: require('@/assets/img/b.png'),
        },
        {
          tit: '广州市哈基米救助基地',
          desc: '',
          src: require('@/assets/img/c.png'),
        },
        {
          tit: '淮安市猫岛',
          desc: '',
          src: require('@/assets/img/d.png'),
        },
        {
          tit: '上海市训练基地',
          desc: '',
          src: require('@/assets/img/e.png'),
        },
        {
          tit: '成都市猫德学院',
          desc: '',
          src: require('@/assets/img/f.png'),
        },
      ],
    }
  },
  components: {
    ConsultCard,CallMe,BoottomTab
  },
}
</script>

<style lang="scss" scoped>
.consult_wrap {
  .consult_img {
    width: 100%;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 50vw;
    }
    background: url('../../assets/img/header.png') 0 0 no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
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
        text-align: center;
      }
    }
    .img_desc {
      font-size: 32px;
      margin-top: 20px;
      text-align: center;
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
  .consult_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .consult_inner {
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
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        @media screen and (max-width: 768px) {
          flex: 3;
        }
        .consult_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .consult_desc {
          font-size: 16px;
          color: #787878;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            margin-top: 10px;
            font-size: 13px;
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
  .consult_card_wrap {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .func_wrap {
    width: 100%;
    padding: 50px;
    background: url('../../assets/img/bg_0.png');
    background-size: 100% 100%;
    .func_wrap_inner {
      width: 70%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      .func_tit {
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
      .func_card {
        justify-content: space-between;
        margin-top: 40px;
        .card_item {
          background: #ffffff;
          box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
          .item_top {
            width: 100%;
            height: 150px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            background: url('../../assets/img/bg3.png');
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .item_bottom {
            padding: 15px;
            p {
              font-size: 16px;
              margin-top: 20px;
            }
          }
        }
      }
      .func_card_mobile {
        width: 100%;
        img {
          width: 100%;
          margin-top: 40px;
        }
      }
    }
    .double_card_wrap {
      width: 70%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      .double_card {
        justify-content: space-between;
        margin-top: 50px;
        @media screen and (max-width: 768px) {
          flex-wrap: wrap;
        }
        .double_card_item {
          height: 340px;
          background: #ffffff;
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          &:nth-child(1){
            background-image: url('../../assets/img/ys1.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          &:nth-child(2){
            background-image: url('../../assets/img/ys2.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          &:nth-child(3){
            background-image: url('../../assets/img/ys3.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          box-shadow: 10px 10px 20px rgba(0,0,0,.1);
          @media screen and (max-width: 768px) {
            height: 140px;
            &:nth-child(n + 3) {
              margin-top: 20px;
            }
          }
          .double_card_bg {
            font-size: 24px;
            color: #000;
            font-weight: bold;
          }
          p {
            line-height: 40PX;
            font-size: 18px;
            margin-top: 30px;
          }
        }
      }
    }
  }
  .func_wrap_mobile{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .appointment_wrap{
    width: 100%;
    height: 350px;
    background: url('../../assets/img/bgcenter.c1d3caa.jpg') 0 0 no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
      height: 130px;
    }
    .appointment_txt{
      width: 70%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      h1{
        font-size: 26px;
        @media screen and (max-width: 768px) {
          font-size: 0.9rem;
          font-weight: normal;
        }
      }
      p{
        font-size: 20px;
        margin-top: 20px;
        @media screen and (max-width: 768px) {
          font-size: 0.75rem;
        }
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
          margin-top: 20px;
        }
        .bottom_img_item {
          width: 30%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin: 20px;
          @media screen and (max-width: 768px) {
            width: 45%;
          }
          .bottom_img {
            width: 100%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .img_desc {
              position: absolute;
              bottom: 50%;
              transform: translateY(50%);
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 20px;
              font-weight: bold;
              @media screen and (max-width:768px){
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>