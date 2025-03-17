<template>
  <el-row class="advantage_wrap">
    <el-col
      class="advantage_item"
      v-for="(item, index) in advantageList"
      :key="index"
      :span="5"
      :xs="11"
    >
      <div class="item_top">
        <div class="icon"><img :src="item.icon" alt=""></div>
        <div class="tit">{{ item.title }}</div>
      </div>
      <ul class="item_desc hidden-xs-only" v-for="(desc, index2) in item.desc" :key="index2">
        <li>{{ desc }}</li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      advantageList: [
        {
          icon: require('../../assets/img/programme/industryInsight/icon/41.png'),
          title: '专业护理',
          desc: [
            '宠物之家通常配备专业的兽医和护理人员',
            '能够为宠物提供全面的健康检查和医疗护理，确保宠物在最佳状态下生活',
          ],
        },
        {
          icon: require('../../assets/img/programme/industryInsight/icon/42.png'),
          title: '舒适环境',
          desc: [
            '宠物之家提供宽敞、干净、舒适的居住环境',
            '包括适宜的温度控制、清洁的休息区和充足的活动空间，确保宠物的生活品质',
          ],
        },
        {
          icon: require('../../assets/img/programme/industryInsight/icon/43.png'),
          title: '个性化服务',
          desc: [
            '根据每只宠物的特殊需求',
            '宠物之家提供个性化的饮食、运动和护理计划',
            '确保每只宠物都能得到最适合的照顾',
          ],
        },
        {
          icon: require('../../assets/img/programme/industryInsight/icon/44.png'),
          title: '安全保障',
          desc: [
            '宠物之家通常设有严格的安全措施',
            '包括监控系统、紧急医疗响应和定期的安全检查，确保宠物在安全的环境中生活',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.advantage_wrap {
  width: 70%;
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  .advantage_item {
    height: auto;
    padding: 30px 20px 80px 20px;
    margin-right: 10px;
    background: url('../../assets/img/422c6817d7.png') 0 0 no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      margin: 0;
      padding: 0 15px;
      margin-top: 3px;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item_top {
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        height: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .icon {
        width: 15%;
        margin-right: 10PX;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          @media screen and (max-width: 768px) {
            margin-bottom: 10px;
            margin-left: 6px;
          }
        }
      }
      .tit {
        width: 100%;
        color: #1c1c1c;
        font-size: 22px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
    .item_desc {
      font-size: 16px;
      line-height: 20PX;
      margin: 0;
      padding: 0;
      margin-top: 20px;
      padding-left: 34px;
      color: #646464;
      li{
          &:first-child{
            margin-top: 30px;
        }
      }
    }
  }
}
</style>