<template>
  <div class="enter_innovation_wrap">
    <div class="enter_img">
      <div class="img_tit hidden-xs-only">宠物美容</div>
      <div class="img_desc hidden-xs-only">
        宠爱无微不至，哈基米为您打造精致萌宠
      </div>
      <div class="img_tit hidden-sm-and-up">
        打造生命健康产业新基建<br />加速园区中小企业高质量发展
      </div>
    </div>
    <div style="z-index:9;position:relative;display:none;">
      <Affix :offset-top="56">
        <Menu
          mode="horizontal"
          theme="light"
          :active-name="selectName"
          class="enter_menu_wrap"
          @on-select="selectMenuItem"
        >
          <MenuItem name="1" class="enter_menu_item">
            BioMall - 生物医药产业创新服务综合体
          </MenuItem>
          <MenuItem name="2" class="enter_menu_item">
            医疗器械创新示范基地
          </MenuItem>
        </Menu>
      </Affix>
    </div>
    <div class="current_show_menu">
      <div class="enter_title_wrap">
        <div class="enter_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center" style="width: 60%">
            <div class="enter_title">哈基米美容三大优势</div>
            <div class="enter_desc hidden-xs-only">
              哈基米宠物美容以专业的技术、贴心的服务和舒适的环境，为您的爱宠提供全方位的美容护理体验。
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <Row
        class-name="enter_card_wrap hidden-xs-only"
        :gutter="20"
        justify="center"
      >
        <Col span="6">
          <Card :bordered="true" class="enter_card_item">
            <p slot="title" class="title">专业美容师团队</p>
            <br />
            <br />
            <br />
            <p>哈基米宠物美容服务拥有经验丰富、经过专业培训的美容师团队，确保宠物在美容过程中得到安全、细致的照顾。</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="true" class="enter_card_item">
            <p slot="title" class="title">个性化美容方案</p>
            <br />
            <br />
            <br />
            <p> 根据宠物的品种、毛发类型及健康状况，提供个性化的美容方案，包括洗澡、修剪、造型等，满足不同宠物的需求。</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="true" class="enter_card_item">
            <p slot="title" class="title">贴心的附加服务</p>
            <br />
            <br />
            <br />
            <p> 除基础美容外，还提供指甲修剪、耳朵清洁、牙齿护理等附加服务，全面呵护宠物的健康与美观。</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
      </Row>
      <div class="enter_card_wrap_mobile hidden-sm-and-up">
        <img src="@/assets/img/16f7580f76.png" alt="" />
      </div>
      <div class="enter_title_wrap">
        <div class="enter_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="enter_title">走进 宠物美容</div>
            <div class="enter_desc"></div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mall_wrap">
        <div class="mall_img">
          <img src="@/assets/img/bioBg9526da1.png" alt="" />
        </div>
        <div class="mall_details">
          <p>
            宠物美容是一门专为宠物提供清洁、修剪和护理服务的艺术与技能，旨在提升宠物的外观美观、促进其健康舒适，并加强宠物与主人间的情感纽带。这一行业涵盖了从基础的洗澡、梳毛、剪指甲到更专业的造型设计、毛发染色以及皮肤护理等多种服务。
          </p>
          <div class="mall_btn">
          </div>
        </div>
      </div>
      <div class="func_wrap">
        <div class="func_wrap_inner">
          <div class="func_tit">哈基米宠物美容 功能体系</div>
          <el-row class="func_card hidden-xs-only" type="flex">
            <el-col
              class="card_item"
              v-for="(item, index) in funcCardList"
              :key="index"
              :span="5"
            >
              <div class="item_top" :style="{'background':`url(${item.bg})`}">
                <p>{{ item.tit }}</p>
              </div>
              <div class="item_bottom">
                <p v-for="(item2, index2) in item.desc" :key="index2">
                  {{ '○  ' + item2 }}
                </p>
              </div>
            </el-col>
          </el-row>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/3572170410.png" alt="" />
          </div>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/3572170410.png" alt="" />
          </div>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/3572170410.png" alt="" />
          </div>
        </div>
      </div>
      <div class="func_wrap" style="background: #f4f9fc">
        <div class="func_wrap_inner">
          <div class="func_tit">哈基米宠物美容 四大核心价值</div>
        </div>
        <div class="double_card_wrap">
          <el-row class="double_card" type="flex">
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>专业至臻，技术为本</p>
            </el-col>
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>健康前置，安全护航</p>
            </el-col>
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>个性定制，美学表达</p>
            </el-col>
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>双向关怀，情感信赖</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <CallMe />
    <MobileCallme />
  </div>
</template>

<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  data() {
    return {
      selectName: '1',
      funcCardList: [
        {
          tit: '基础护理服务',
          desc: [
            '全身清洁：低敏浴液深层清洁，针对不同毛发类型（长毛/短毛/卷毛）定制洗护方案。   ',
            '五官清洁：耳道清理、泪痕祛除、牙齿护理（刷牙/漱口水），预防感染。 ',
            '足部护理：指甲修剪、肉垫护理（去角质、保湿），避免行走损伤。',
            '毛发养护：SPA级护理（护毛素、精油按摩）、开结去废毛，减少脱毛困扰。',
          ],
          bg:require('../../assets/img/bg1.png')
        },
        {
          tit: '健康管理服务',
          desc: [
            '特殊需求护理：洗护过程中同步检查皮肤状况（真菌、过敏、寄生虫等），提供针对性建议或转介医疗。',
            '特殊需求护理：老年/幼宠护理、敏感肌护理、术后护理等',
          ],
          bg:require('../../assets/img/bg2.png')
        },
        {
          tit: '形象设计与时尚增值',
          desc: [
            '造型定制化：结合宠物体型、性格与主人偏好，设计独特造型（如节日主题、IP联名款）。',
            '美容档案建立：记录宠物毛发状态、皮肤健康数据及偏好造型，实现长期跟踪与个性化服务优化。',
          ],
          bg:require('../../assets/img/bg3.png')
        },
        {
          tit: '客户体验与安全保障',
          desc: [
            '环境与流程：',
            '1、减压环境：独立美容室、背景音乐、安抚玩具，减少宠物焦虑。',
            '2、安全保障体系：一宠一消毒，避免交叉感染',
            '3、便捷服务：预约制管理、上门接送、美容进度实时通知，优化主人时间成本',
          ],
          bg:require('../../assets/img/bg3.png')
        },
      ],
    }
  },
  methods: {
    selectMenuItem(name) {
      console.log(name)
    },
    gotoDemo(){
      this.$router.push('/demo')
    }
  },
  components: {
    CallMe,
    MobileCallme,
  },
}
</script>

<style lang="scss" scoped>
.enter_innovation_wrap {
  width: 100%;
  .enter_img {
    width: 100%;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 50vw;
    }
    background: url('../../assets/img/banner22.png') 0 0 no-repeat;
    background-size: 100% 100%;
    color: #fff;
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
  .enter_menu_wrap {
    @media screen and (max-width: 768px) {
      height: 40px;
    }
    .enter_menu_item {
      width: 50%;
      text-align: center;
      font-size: 22px;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .enter_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .enter_inner {
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
        .enter_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .enter_desc {
          font-size: 16px;
          color: #787878;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            margin-top: 10px;
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
  .current_show_menu {
    .enter_card_wrap_mobile{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .enter_card_wrap {
      width: 100%;
      margin-top: 50px;
      .enter_card_item {
        background: #f4f9fc;
        text-align: center;
        p {
          width: 60%;
          text-align: center;
          margin: 0 auto;
          font-size: 16px;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    .mall_wrap {
      width: 70%;
      display: flex;
      justify-content: center;
      margin: 34px auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      .mall_img {
        width: 50%;
        margin-right: 30px;
        padding: 0 30px;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
    .mall_details {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: 768px) {
        width: 90%;
        text-align: center;
      }
      p {
        font-size: 20px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .mall_btn {
        margin-top: 40px;
        @media screen and (max-width: 768px) {
          padding: 20px 0;
        }
        .btn_self {
          background: orange;
          color: #fff;
          border-radius: 20px;
          border: none;
          @media screen and (max-width: 768px) {
            width: 80px;
            height: 35px;
            border-radius: 20px;
            font-size: 14px;
          }
        }
      }
    }
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
          background: #fff;
          box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
          .item_top {
            width: 100%;
            height: 150px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
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
      .func_card_mobile{
        width: 100%;
        img{
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
          height: 250px;
          background: rgba($color: #fff, $alpha: 1);
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          &:nth-child(1){
            background-image: url('../../assets/img/bg_1.png');
          }
          &:nth-child(2){
            background-image: url('../../assets/img/bg_2.png');
          }
          &:nth-child(3){
            background-image: url('../../assets/img/bg_3.png');
          }
          &:nth-child(4){
            background-image: url('../../assets/img/bg_4.png');
          }
          background-position: 100% 100%;
          background-repeat: no-repeat;
          background-size: 30%;
          @media screen and (max-width: 768px) {
            height: 140px;
            &:nth-child(n+3){
              margin-top: 20px;
            }
          }
          .double_card_bg {
            width: 30px;
            height: 15px;
            background: linear-gradient(90deg, rgba(252, 197, 96, 0), #feb15a);
            @media screen and (max-width: 768px) {
              width: 20px;
              height: 8px;
            }
          }
          p {
            line-height: 20PX;
            font-size: 15px;
            margin-top: 30px;
            @media screen and (max-width: 768px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>