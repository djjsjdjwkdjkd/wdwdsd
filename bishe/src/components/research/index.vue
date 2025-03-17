<template>
  <div class="research_wrap">
    <el-carousel
      height="37vw"
      loop
      arrow="never"
      class="hidden-xs-only"
      indicator-position="none"
    >
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.line1 }}</h1>
          <h1>{{ item.line2 }}</h1>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="production_img hidden-sm-and-up">
      <div class="img_tit">哈基米研究院</div>
      <div class="img_desc">专注于宠物健康、营养、行为及智能化产品的研究与开发</div>
    </div>

    <div class="research_card hidden-xs-only">
      <div class="research-left">
        <div class="research-left-title">哈基米研究院</div>
        <div class="research-left-desc">
          研究院以“科学养宠，创新未来”为使命，致力于通过前沿科技与创新研究，提升宠物的生活品质，推动宠物行业的可持续发展。
        </div>
        <div class="research-left-instrc">核心能力</div>
        <ul>
          <li class="research-left-detail">
            <span>宠物营养科学：</span>
            研究不同品种、年龄段宠物的营养需求，开发定制化食品配方。探索天然原料的功能性，提升宠物食品的健康价值。与国际权威机构合作，制定科学的宠物营养标准。
          </li>
          <li class="research-left-detail">
            <span>宠物健康与疾病预防：</span>
            研究宠物常见疾病的预防与治疗方案。开发宠物健康监测设备，实时追踪宠物体征数据。提供宠物健康管理建议，帮助主人科学护理宠物。
          </li>
          <li class="research-left-detail">
            <span>宠物行为研究：</span>
            分析宠物的行为模式，帮助主人更好地理解宠物需求。开发行为训练产品，改善宠物的不良习惯。提供宠物心理健康的解决方案，促进宠物与主人的和谐相处。
          </li>
        </ul>
      </div>
      <div class="research_card_right">
        <img src="@/assets/img/build.543dd76.png" alt="" />
      </div>
    </div>

    <div class="research_card_mobile hidden-sm-and-up">
      <h1>哈基米研究院</h1>
      <p>
        研究院致力于成为全球宠物科研领域的领导者，通过持续创新与研究，为宠物和宠物主人提供更科学、更健康、更智能的解决方案，推动宠物行业迈向更加美好的未来
      </p>
      <h2>团队介绍</h2>
      <p>
        云逸研究院团队30多人，拥有一支由宠物营养学家，兽医专家和动物行为学家为骨干组成的复合型队伍，总部位于上海，在北京，成都，苏州设有分支机构。专注于宠物健康、营养、行为及智能化产品的研究与开发，为全球宠物家庭提供更科学、更健康、更智能的解决方案，推动宠物行业的可持续发展。
      </p>
      <img src="@/assets/img/build.543dd76.png" alt="" />
    </div>

    <div class="research_title_wrap">
      <div class="research_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="research_title">三大特色</div>
          <div class="research_desc"></div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>

    <div class="research_sp_wrap hidden-xs-only">
      <el-row
        type="flex"
        justify="space-between"
        class="research_sp_row"
        :gutter="10"
      >
        <el-col :span="7" class="research_sp_col">
          <div class="tit">面向宠物健康与营养</div>
          <div class="desc">
            通过科学研究，确保宠物获得全面、均衡的营养，提升其健康水平。
          </div>
        </el-col>
        <el-col :span="7" class="research_sp_col">
          <div class="tit">面向智能化养宠与可持续发展</div>
          <div class="desc">
            通过科技创新与环保理念，推动宠物行业的智能化与可持续发展。
          </div>
        </el-col>
        <el-col :span="7" class="research_sp_col">
          <div class="tit">面向宠物行为与心理</div>
          <div class="desc">
            通过行为学研究，改善宠物的行为问题，促进宠物与主人的和谐相处。
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="research_sp_wrap_mobile hidden-sm-and-up">
      <img src="@/assets/img/content1.png" alt="">
    </div>

    <div class="product_shows_wrap">
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center" style="width: 40%">
            <div class="production_title">研究院研究方向与成果</div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="card_fan_list">
        <el-row class="card_fan_wrap" type="flex" justify="space-between">
          <el-col
            class="card_fan_item"
            :span="11"
            v-for="(item, index) in cardList"
            :key="index"
          >
            <div class="card_left hidden-xs-only">
              <img :src="item.img" alt="" />
            </div>
            <div class="card_right">
              <h1>{{ item.tit }}</h1>
              <p>{{ item.desc }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="research_title_wrap">
      <div class="research_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 70%">
          <div class="research_title">中国宠物产业发展</div>
          <div class="research_desc"></div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>

    <div class="develop_wrap">
      <div class="develop_left">
        <h1>智能化宠物设备，远程宠物的“趋势线”</h1>
        <p>
          随着城市化进程的加快和生活节奏的提速，越来越多的宠物主人面临无法全天候陪伴宠物的问题。智能设备的兴起为远程照料宠物提供了全新的解决方案。智能设备为远程照料宠物提供了高效、便捷的解决方案，正在改变传统养宠方式。随着技术的不断进步和市场需求的增长，智能设备将在宠物行业中发挥越来越重要的作用。未来，通过技术创新与市场拓展，智能设备有望成为宠物家庭的标配，为宠物和主人带来更美好的生活体验。
        </p>
      </div>
      <div class="develop_right">
        <img src="@/assets/img/cbib.3166b1c.png" alt="" />
      </div>
    </div>
    <CallMe />
    <BoottomTab/>
  </div>
</template>

<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
import BoottomTab from '@/components/consulting/BoottomTab.vue'
export default {
  data() {
    return {
      imgList: [
        {
          src: require('@/assets/img/yjbg1.550eeb6.png'),
          line1: '哈基米研究院',
          line2: '专注于宠物健康、营养、行为及智能化产品的研究与开发',
        },
      ],
      cardList: [
        {
          tit: '宠物营养与健康',
          desc: '推出多款天然、无添加的宠物食品，满足不同宠物的营养需求。',
          img:require('../../assets/img/researchInstitute/icon1.png')
        },
        {
          tit: '宠物行为与心理',
          desc: '开发智能宠物玩具与训练器材，帮助宠物养成良好的行为习惯。',
          img:require('../../assets/img/researchInstitute/icon2.png')
        },
        {
          tit: '智能化宠物产品',
          desc: '推出多款智能宠物设备，如智能喂食器、健康监测项圈等',
          img:require('../../assets/img/researchInstitute/icon3.png')
        },
        {
          tit: '可持续发展与环保',
          desc: '推出可降解宠物玩具与环保宠物用品，减少塑料污染。',
          img:require('../../assets/img/researchInstitute/icon4.png')
        },
      ],
    }
  },
  components: {
    CallMe,
    MobileCallme,
    BoottomTab
  },
}
</script>

<style lang="scss" scoped>
.research_wrap {
  position: relative;
  width: 100%;
  .production_img {
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
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tips_font {
    position: absolute;
    top: 260px;
    left: 300px;
    z-index: 5;
    color: #2d3937;
    font-size: 25px;
    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
  .research_card {
    width: 72%;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    margin-top: -200px;
    background: #ffffff;
    padding: 40px;
    display: flex;
    background: url('../../assets/img/bg.722080d.png');
    background-size: 100% 100%;
    .research-left {
      .research-left-title {
        font-size: 34px;
        font-weight: bold;
        color: #000;
      }
      .research-left-desc {
        color: #5b6e74;
        line-height: 2rem;
        font-size: 19px;
      }
      .research-left-instrc {
        font-size: 24px;
        margin-top: 20px;
      }
      ul {
        .research-left-detail {
          font-size: 18px;
          margin-top: 12px;
          span {
            font-weight: bold;
            color: #000;
          }
        }
      }
    }
    .research_card_right {
      margin-left: 50px;
      img {
      }
    }
  }
  .research_card_mobile{
    width: 100%;
    padding: 1rem;
    background: url('../../assets/img/bg.722080d.png') 0 0 no-repeat;
    background-size: cover;
    position: relative;
    h1{
      font-size: 1.3rem;
    }
    p{
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #5b6e74;
      line-height: 1.5rem;
    }
    h2{
      margin-top: 1rem;
      font-weight: normal;
      font-size: 1rem;
      color: #000;
    }
    img{
      position: absolute;
      right: 1rem;
      width: 30%;
      bottom: -4rem;
      opacity: 0.6;
    }
  }
  .research_title_wrap {
    width: 100%;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .research_inner {
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
        .research_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .research_desc {
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
  .research_sp_wrap {
    width: 70%;
    margin: 0 auto;
    height: 300px;
    .research_sp_row {
      width: 100%;
      .research_sp_col {
        background-size: 100% 100%;
        height: 420px;
        padding: 200px;
        &:nth-child(1){
          background: url('../../assets/img/researchInstitute/1.png');
        }
        &:nth-child(2){
          background: url('../../assets/img/researchInstitute/2.png');
        }
        &:nth-child(3){
          background: url('../../assets/img/researchInstitute/3.png');
        }
        .tit {
          font-size: 32px;
          color: #000;
          margin: 0 30px;
        }
        .desc {
          font-size: 19px;
          margin: 10px 30px;
        }
      }
    }
  }
  .research_sp_wrap_mobile{
    width: 90%;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .product_shows_wrap {
    width: 100%;
    background: #f4f9fc;
    background-size: cover;
    padding: 10px 0 50px 0;
    box-sizing: border-box;
    margin-top: 250px;
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
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
    .card_fan_list {
      width: 70%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      .card_fan_wrap {
        flex-wrap: wrap;
        margin-top: 50px;
      }
      .card_fan_item {
        display: flex;
        align-items: center;
        background: #fff;
        margin-top: 50px;
        padding: 30px;
        box-shadow: 10px 10px 20px rgba($color: #000, $alpha: 0.1);
        @media screen and (max-width: 768px) {
          background: url('../../assets/img/icon2.png') 0 0 no-repeat;
          background-position: 100% 100%;
          background-size: 35%;
          height: 100px;
          &:nth-child(n+3){
            margin-top: 25px;
          }
        }
        .card_left {
          width: 20%;
          img {
            width: 100%;
          }
        }
        .card_right {
          margin-left: 15px;
          h1 {
            font-size: 25px;
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }
          p {
            font-size: 18px;
            margin-top: 10px;
            @media screen and (max-width: 768px) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .develop_wrap {
    width: 70%;
    margin: 0 auto;
    display: flex;
    @media screen and (max-width: 768px) {
      width: 90%;
      flex-direction: column;
      margin-bottom: 30px;
    }
    .develop_left {
      margin-right: 100px;
      h1 {
        font-size: 26px;
        @media screen and (max-width: 768px) {
          font-size: 0.95rem;  
        }
      }
      p {
        margin-top: 30px;
        font-size: 20px;
        color: #5b6e74;
        @media screen and (max-width: 768px) {
          font-size: 13px;
        }
      }
    }
    .develop_right {
      width: 100%;
      @media screen and (max-width: 768px) {
        width: 40%;
        margin: 0 auto;
      }
      img {
        width: 100%;
      }
      .tips {
        text-align: center;
        color: #2091d3;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>