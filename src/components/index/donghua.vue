<template>
  <div class="chiefRecommend-container">
    <div class="tittle">
      <span></span>
      <h3>动画</h3>
    </div>
    <div class="box">
      <DonghuaList></DonghuaList>
      <paihang></paihang>
    </div>
  </div>
</template>
<script>
import DonghuaList from "../../subcomponents/videoList/DonghuaList.vue";
import paihang from "../../subcomponents/paihang/paihang.vue";
export default {
  data() {
    return {
      videoList: [
        {
          id: 1,
          up: "大大大灯泡",
          times: "29,5",
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
          face: "../../static/images/face4.jpg",
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
        },
        {
          id: 9,
          up: "药水哥就是刘波",
          times: "333",
          face: "../../../static/images/face7.jpg",
          tittle: "西蜀霸王！！"
        },
        {
          id: 10,
          up: "药水哥就是刘波",
          times: "333",
          face: "../../../static/images/face7.jpg",
          tittle: "西蜀霸王！！"
        }
      ]
    };
  },
  components: {
    DonghuaList,
    paihang
  }
};
</script>

<style lang="less" scoped>
.chiefRecommend-container {
  width: 1220px;
  margin: 0 auto;
  .tittle {
    position: relative;
    display: flex;
    top: 20px;
    align-items: center;
    float: left;
    h3 {
      margin: 0;
      padding: 0;
    }
    span {
      width: 50px;
      height: 50px;
      display: inline-block;
      background-image: url("../../../static/images/icons.png");
      background-position: -140px -908px;
    }
  }
  s li {
    list-style: none;
  }
  .box {
    width: 1220px;
    display: flex;
    justify-content: flex-start;
    height: 355px;
    margin: 0 auto;
    padding-top: 10px;
    position: relative;
  }
}
</style>
