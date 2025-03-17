<template>
  <div class="news_details_wrap">
    <PCNavbar selectIndex="4-2" />
    <MobileNavBar :currentActive="3" />
    <div class="news_content">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="news_bread">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
      <form name="_newscontent_fromname">
        <h1 class="h1tit">
          市领导调研哈基米宠物公司：点赞科技创新 助力宠物经济高质量发展
        </h1>
        <h4 class="h4tit">
          来源：哈基米宠物公司&nbsp;&nbsp;作者：&nbsp;&nbsp;投稿时间：2025-01-20
        </h4>
        <div id="vsb_content_1002" class="nr-div-p">
          <div class="v_news_content">
            <img src="../../assets/img/news/11.png" class="img_vsb_content" />
            <p class="vsbcontent_start">
              2025年1月16日上午，上海市委常委、副市长XXX率市商务局、科技局等部门负责人一行莅临哈基米宠物科技有限公司（以下简称“哈基米公司”）调研考察，深入了解企业科技创新成果及宠物产业发展情况，并就推动宠物经济与智能技术深度融合提出指导建议。<br />
            </p>
            <img src="../../assets/img/news/12.png" class="img_vsb_content" />
            <p>
              调研组一行抵达哈基米公司总部，在公司董事长谢文东陪同下，先后参观了企业研发中心、智能产品展厅及宠物健康实验室。在智能宠物用品展示区，市领导重点观摩了企业自主研发的“AI智能宠物项圈”和“宠物健康监测云平台”，详细询问产品功能及市场应用情况。据悉，该系列产品通过物联网技术实时监测宠物心率、运动量等健康数据，已获得20余项国家专利，并出口至欧美、东南亚等15个国家和地区。副市长XXX对企业的技术突破给予高度评价，称其“以科技赋能宠物关怀，为行业树立了创新标杆”。
            </p>
            <img src="../../assets/img/news/13.png" class="img_vsb_content" />
            <p>
              XXX副部长对哈基米公司在短短两年内所做出的工作和成果给予了充分肯定，并对哈基米公司下一步的发展提出殷切期望：
            </p>
            <p>
              一是聚焦智能科技，点赞创新成果；
            </p>
            <p>二是深化政企联动，共谋产业升级；</p>
            <p>
              三是要注重建设硬能力，建立严格的第三方检验监测服务标准，做到公平公正，树立权威公信力。
            </p>
            <p>
              陪同XXX副部长一行调研的还有哈基米研究院副院长刘文强、上海市政府副秘书长XXXX、上海市工信局局长XX以及闵行区委副书记XX等领导。
            </p>
          </div>
        </div>
        <div id="div_vote_id"></div>
        <div class="clear"></div>
        <div class="clear"></div>
        <!-- <h3 style="text-align: center">
          【下一篇】:
          <a href="33332.htm">上海市副市长XX一行调研哈基米公司</a>
        </h3> -->
      </form>
    </div>
  </div>
</template>

<script>
import PCNavbar from '@/components/report_list/SpaNav.vue'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import moment from 'moment'
export default {
  created() {},
  data() {
    return {
      moment,
    }
  },
  components: {
    PCNavbar,
    MobileNavBar,
  },
  methods: {},
}
</script>

<style lang="scss">
.news_content{
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  @media screen and (max-width:768px){
    width: 90%;
  }
  .news_bread{
    font-size: 14px;
    margin-bottom: 10px;
    @media screen and (max-width:768px){
      font-size: 14px;
    }
  }
}
.nr-div-p {
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
  margin: 0 25px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-indent: 2em;
  color: #000;
}

.nr-div-p p {
  text-align: left;
  font-size: 14PX;
  line-height: 30PX;
  font-weight: normal;
  color: #000;
  @media screen and (max-width:768px){
    line-height: 24px;
    font-size: 14px;
    text-indent: 2em;
    padding: 10px 0;
  }
}
.clear {
  clear: both;
}
.img_vsb_content{
  width: 70%;
}
.h1tit{
  @media screen and (max-width:768px){
    font-size: 20px;
  }
}
.h4tit{
  @media screen and (max-width:768px){
    font-size: 14px;
  }
}
.v_news_content{
  text-align: center;
  img{
    @media screen and (max-width:768px){
      width: 90%;
    }
  }
}
</style>