<template>
  <el-row class="core_three_wrap">
    <el-col class="three_left">
      <div class="left_tit">
        
      </div>
      <div class="left_desc">
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/xiazai.png" alt="">
          </div>
          <div class="item_right">
            <p>犬类饲养与行为管理</p>
            <p>介绍犬类品种特性、饲养基础、行为管理、训练技巧、心理需求、健康与疾病预防以及相关法律法规</p>
          </div>
        </div>
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/img/xiazai2.png" alt="">
          </div>
          <div class="item_right">
            <p>猫类护理与健康</p>
            <p>全面涵盖猫咪品种特性、日常护理、营养需求、行为管理、常见疾病预防与治疗以及老年猫特殊护理</p>
          </div>
        </div>
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/img/xiazai3.png" alt="">
          </div>
          <div class="item_right">
            <p>异宠饲养指南</p>
            <p>协帮助饲养者科学、负责任地照顾这些特殊宠物，确保它们的福利与健康</p>
          </div>
        </div>
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/img/xiazai4.png" alt="">
          </div>
          <div class="item_right">
            <p>宠物健康与医疗</p>
            <p>帮助您科学照顾宠物，确保其身心健康并延长寿命</p>
          </div>
        </div>
      </div>
    </el-col>
    <el-col class="three_right">
      <img src="@/assets/img/right3 (1).png" alt="" />
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.core_three_wrap {
  display: flex;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  .three_left {
    width: 40%;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .left_tit{
      color: #3e3e3e;
      font-size: 20px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-top: 20PX;
      }
    }
    .left_desc{
      .desc_item{
        margin-top: 40px;
        display: flex;
        align-items: center;
        padding-left: 50px;
        .item_left{
          img{
            width: 50px;
            height: 50px;
          }
        }
        .item_right{
          margin-left: 20px;
          p{
            margin: 0;
            &:nth-child(1){
              color: #717171;
              font-size: 16px;
              font-weight: bold;
              @media screen and (max-width: 768px) {
                font-size: 1rem;
                margin-top: 20PX;
              }
            }
            &:nth-child(2){
              color: #717171;
              font-size: 14px;
              padding: 6px 0;
              @media screen and (max-width: 768px) {
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
  .three_right {
    width: 20%;
    height: 100%;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 20PX;
    }
    img {
      width: 80%;
      margin-top: 40px;
    }
  }
}
</style>