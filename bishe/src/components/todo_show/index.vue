<template>
  <div class="data_brain_wrap">
    <div class="brain_title">哈基米宠物之家</div>
    <div class="brain_desc">致力于为宠物和主人提供全方位的高品质服务</div>

    <el-row class="card_wrap" type="flex">
      <el-col
        class="brain_item"
        :lg="7"
        :sm="11"
        :xs="11"
        v-for="(item, index) in cardList"
        :key="index"
      >
        <div class="item_title">{{ item.title }}</div>
        <div class="item_desc">{{ item.desc }}</div>
        <div class="item_navigate" @click="handleNavigate">了解详情 >></div>
        <div class="item_bg"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          title: '宠物健康管理',
          desc: '通过智能设备实时监测宠物健康数据，生成健康报告。提供远程问诊服务，方便宠物主人随时咨询兽医。',
        },
        {
          title: '宠物营养定制',
          desc: '与哈基米研究院合作，确保食品配方的科学性与安全性。推出功能性食品，如增强免疫力、改善消化健康的特殊配方。',
        },
        {
          title: '宠物行为训练',
          desc: '由专业动物行为学家设计训练方案，科学有效。提供线上训练课程，方便主人随时随地学习。',
        },
        {
          title: '宠物美容与护理',
          desc: '使用天然成分的护理产品，确保宠物安全。提供上门美容服务，节省主人时间。',
        },
        {
          title: '宠物寄养与托管',
          desc: '24小时监控与专业护理，确保宠物安全。提供实时视频监控，主人可随时查看宠物状态。',
        },
        {
          title: '宠物社交与活动',
          desc: '活动设计注重宠物与主人的互动，提升情感联结。提供专业摄影师服务，记录宠物与主人的美好瞬间。',
        },
      ],
    }
  },
  methods:{
    handleNavigate(){
      this.$router.push('/production/1').catch((v) => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.data_brain_wrap {
  padding: 50px 0;
  background: #e8eef2;
  text-align: center;
  .brain_title {
    color: #203040;
    font-size: 40px;
    font-weight: bold;
    padding: 30px 0;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .brain_desc {
    color: rgba(32, 48, 64, 0.75);
    font-size: 22px;
    letter-spacing: 4px;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 40PX;
    }
  }
  .card_wrap {
    width: 70%;
    flex-wrap: wrap;
    margin: 0px auto;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    .brain_item {
      transition: background-color 1s;
      padding: 30px;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 40PX;
        border-radius: 10PX;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20PX;
        &:nth-child(-n+2){
          margin-top: 0;
        }
      }
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 0.5rem 1.5rem 0 rgba(0, 135, 168, 0.15);
      margin-top: 40px;
      position: relative;
      .item_bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          134deg,
          #0649b8 1%,
          #0a7fd7 41%,
          #03d2c5 99%
        );
        opacity: 0;
        transition: all 0.5s;
        border-radius: 20px;
        z-index: 1;
      }
      &:hover .item_bg{
        opacity: 1;
      }
      &:hover .item_title {
        color: #fff;
      }
      &:hover .item_desc {
        color: #fff;
      }
      .item_title {
        transition: all 0.5s;
        font-size: 30px;
        font-weight: bold;
        color: #203040;
        text-align: left;
        padding: 20px 0 40px 0;
        z-index: 2;
        position: inherit;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          text-align: center;
        }
      }
      .item_desc {
        transition: all 0.5s;
        color: #666;
        text-align: left;
        line-height: 1.5rem;
        z-index: 2;
        position: inherit;
        font-size: 18px;
        min-height: 110px;
        @media screen and (max-width: 768px) {
          min-height: 110PX;
          text-indent: 2em;
          font-size: 12px;
        }
      }
      .item_navigate {
        width: 100PX;
        height: 30PX;
        padding: 0 10px;
        background: #ffa400;
        color: #fff;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin-top: 40px;
        cursor: pointer;
        z-index: 2;
        position: inherit;
        @media screen and (max-width: 768px) {
          margin-bottom: 10PX;
          font-size: 14px;
        }
      }
    }
  }
}
</style>