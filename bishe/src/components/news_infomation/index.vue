<template>
  <div class="news_wrap">
    <div class="news_tit">新闻资讯</div>
    <div class="news_detail">
      <div
        class="news_item hvr-curl-top-right"
        v-for="(item, index) in newsList"
        :key="index"
        @click="handleToNewsDetails(index)"
      >
        <div class="news_item_util">
          <div class="news_plate">{{ item.newPlate }}</div>
          <div class="bottom_wrap">
            <div class="bottom_left">
              <img :src="item.imageSrc" alt="" />
            </div>
            <div class="bottom_right">
              <div class="right_title">{{ item.newTitle }}</div>
              <div class="right_desc">{{ item.newDetail }}</div>
              <router-link class="right_btn" to="/fournav/3"
                >更多 >></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          newPlate: '企业新闻',
          imageSrc:
            'https://www.ccidgroup.com/__local/5/86/61/94F4626DCD07959D13678A10C75_04589E4D_CB722.png',
          newTitle: '市领导走访慰问“哈基米”宠物机构，送去新春祝福！',
          newDetail:
            '2021年1月1日上午，今日上午，XX一行来到我市知名宠物机构“哈基米”进行走访慰问，向机构工作人员和寄养宠物送去新春的祝福和问候...',
        },
        {
          newPlate: '行业干货',
          imageSrc:
            'https://www.ccidgroup.com/__local/C/6C/7A/8AD05A17B71778E02B107F689E5_77E15707_32FF.jpg',
          newTitle: '2024年世界宠物论坛在北京开幕，共商宠物行业未来发展',
          newDetail:
            '2024年11月3日上午， 备受瞩目的2025年世界宠物论坛在北京国际会议中心隆重开幕。本次论坛以...',
        },
      ],
    }
  },
  methods: {
    handleToNewsDetails(index) {
      if (index === 0) {
        // window.location.href = 'https://www.ccidgroup.com/info/1098/33359.htm'
        this.$router.push('/news_detail/1')
      }else{
        // window.location.href = 'https://www.ccidgroup.com/info/1043/33844.htm'
        this.$router.push('/news_detail/2')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news_wrap {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  .news_tit {
    color: #203040;
    font-size: 40px;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .news_detail {
    width: 70%;
    margin-top: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    .news_item {
      display: flex;
      width: 47%;
      margin-top: 30px;
      cursor: pointer;
      .news_item_util {
        .news_plate {
          color: #717171;
          font-weight: bold;
          text-align: left;
          margin: 20px 0;
          font-size: 22px;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .bottom_wrap {
          display: flex;
          @media screen and (max-width: 768px) {
            flex-direction: column;
          }
          .bottom_left {
            img {
              width: 300px;
              height: 160px;
              object-fit: cover;
              @media screen and (max-width: 768px) {
                width: 100%;
                height: 92px;
                margin: 5px 0;
              }
            }
          }
          .bottom_right {
            margin-left: 10px;
            text-align: left;
            .right_title {
              font-weight: bold;
              font-size: 18px;
              overflow:hidden; 
              text-overflow:ellipsis;
              @media screen and (max-width: 768px) {
                font-size: 1rem;
                display:-webkit-box; 
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2; 
              }
            }

            .right_desc {
              color: #717171;
              font-size: 15px;
              margin-top: 20px;
              line-height: 20PX;
              @media screen and (max-width: 768px) {
                font-size: 0.9rem;
                min-height: 120px;
              }
            }
            .right_btn {
              float: right;
              background: #ffa400;
              font-size: 14px;
              padding: 5px 10px;
              color: #fff;
              border-radius: 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 10px;
              cursor: pointer;
              @media screen and (max-width: 768px) {
                font-size: 0.9rem;
                width: 80px;
                height: 28px;
                border-radius: 20px;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>