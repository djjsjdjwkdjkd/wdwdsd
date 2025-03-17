<template>
  <el-row class="core_one_wrap">
    <el-col class="one_left">
      <div class="left_tit">
        不同年龄、体型和健康状况的宠物对营养的需求不同，科学配方的宠物食品可以针对性地提供均衡营养
      </div>
      <ul class="left_desc">
        <li>宠物食品是宠物获取营养的主要来源。优质的宠物食品含有蛋白质、脂肪、碳水化合物、维生素和矿物质等必需营养素，能够满足宠物的日常能量需求和生理功能。高质量的宠物食品有助于增强宠物的免疫系统，减少疾病的发生。</li>
      </ul>
      <div class="left_card">
        <div class="card_item" v-for="(item, index) in cardList" :key="index">
          <i :class="item.icon" class="iconfont"></i>
          <span class="item_txt">{{ item.txt }}</span>
        </div>
      </div>
    </el-col>
    <el-col class="one_right">
      <img src="@/assets/img/right1.png" alt="">
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          icon: 'icon-chanyelian-shengwuyiyao',
          txt: '生物医药',
        },
        {
          icon: 'icon-shengchanzhizao',
          txt: '品质把控',
        },
        {
          icon: 'icon-lvye',
          txt: ' 新原料开发',
        },
        {
          icon: 'icon-zu',
          txt: ' 严选材料',
        },
        {
          icon: 'icon-dc-icon-xinxijishu',
          txt: '智能化喂养',
        },
        {
          icon: 'icon-jienenghuanbao',
          txt: ' 环保健康',
        },
        {
          icon: 'icon-shuzichuangyi',
          txt: '宠物营养学',
        },
        {
          icon: 'icon-fenzishi',
          txt: '个性化定制',
        },
        {
          icon: 'icon-xinnengyuan',
          txt: '送货上门',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.core_one_wrap {
  display: flex;
  justify-content: center;
  text-align: left;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  .one_left {
    width: 40%;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .left_tit {
      font-size: 23px;
      font-weight: bold;
      color: #3e3e3e;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-top: 20PX;
      }
    }

    .left_desc {
      color: #717171;
      padding: 10px 40px 20px 40px;
      li {
        line-height: 25PX;
      }
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    .left_card {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 25px;
      margin-right: 80px;
      @media screen and (max-width: 768px) {
        margin: 0;
      }
      .card_item {
        box-sizing: border-box;
        width: 30%;
        height: 50px;
        background: #fff;
        box-shadow: 0 -0.0625rem 0.4375rem 0 silver,
          0 0 0.75rem 0 rgb(0 0 0 / 10%);
        display: flex;
        align-items: center;
        color: #0991d3;
        padding: 0 20px;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          height: 50PX;
        }
        i{
          font-size: 1.3rem;
        }
        &:nth-child(n + 4) {
          margin-top: 30px;
          @media screen and (max-width: 768px) {
            margin-top: 16PX;
          }
        }
        &:hover .item_txt {
          letter-spacing: 4px;
        }
        .item_txt {
          width: 100%;
          font-weight: bold;
          font-size: 17px;
          margin-left: 10px;
          transition: all 1s;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .one_right {
    width: 20%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 70%;
      margin-top: 20PX;
    }
    img{
      width: 100%;
      margin-top: 40px;
    }
  }
}
</style>