<template>
  <div class="chiefRecommend-container">
    <div class="box">
      <div class="box-l-lunbo">
        <mt-swipe @change="handleChange">
          <mt-swipe-item>
            <a href>
              <img src="../../../static/images/lunbo1.jpg" alt>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img src="../../../static/images/lunbo2.jpg" alt>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img src="../../../static/images/lunbo3.jpg" alt>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 视频列表区域 -->
      <videoList></videoList>
    </div>
  </div>
</template>
<script>
import videoList from "../../subcomponents/recommend/videoListUp.vue";
export default {
  data() {
    return {
      videoList: [
        {
          id: 1,
          up: "大大大灯泡",
          times: "29",
          face: "../../../static/images/face.jpg",
          tittle: "博士人"
        },
        {
          id: 2,
          up: "敖厂长",
          times: "34",
          face: "../../../static/images/face2.jpg",
          tittle: "什么时候才能有女朋友？"
        },
        {
          id: 3,
          up: "10后找人带",
          times: "22",
          face: "../../../static/images/face3.jpg",
          tittle: "套你猴子的"
        },
        {
          id: 4,
          up: "土味角虫",
          times: "122",
          face: "../../../static/images/face4.jpg",
          tittle: "苏喂苏喂苏喂"
        },
        {
          id: 5,
          up: "余小C真的很强",
          times: "333",
          face: "../../../static/images/face5.jpg",
          tittle: "王者之拉！"
        },
        {
          id: 6,
          up: "药水哥就是刘波",
          times: "333",
          face: "../../../static/images/face6.jpg",
          tittle: "西蜀霸王！！"
        },
        {
          id: 7,
          up: "药水哥就是刘波",
          times: "333",
          face: "../../../static/images/face7.jpg",
          tittle: "西蜀霸王！！"
        },
        {
          id: 8,
          up: "药水哥就是刘波",
          times: "333",
          face: "../../../static/images/face7.jpg",
          tittle: "西蜀霸王！！"
        }
      ]
    };
  },
  components: {
    videoList
  }
};
</script>
<style lang="less" scoped>
.chiefRecommend-container {
  .tittle {
    padding-left: 300px;
  }
  .box {
    width: 1220px;
    height: 220px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 10px;
    .box-l-lunbo {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
