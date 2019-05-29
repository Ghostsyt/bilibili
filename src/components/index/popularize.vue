<template>
  <div class="chiefRecommend-container">
    <div class="box">
      <div class="tittle">
        <span></span>
        <h3>推广</h3>
      </div>
      <videoListjindu></videoListjindu>
      <div class="box-r">
        <p class="advertise">
          <span>
            <a href>在线人数：1333222</a>
          </span>
          <em></em>
          <span>
            <a href>最新投稿：111134</a>
          </span>
        </p>
        <img src="../../../static/images/tuiguangguanggao1.jpg" alt>
      </div>
    </div>
  </div>
</template>
<script>
import videoListjindu from "../../subcomponents/popularize/videoListjindu.vue";
export default {
  components: {
    videoListjindu
  }
  //   mounted() {
  //     var oDetile = document.getElementsByClassName("propu-detile");
  //     for (var i = 0; i < oDetile.length; i++) {
  //       this.Detile.push(oDetile[i]);
  //     }
  //   }
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
  .box {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    .tittle {
      position: absolute;
      display: flex;
      top: -2px;
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
        background-position: -140px -75px;
      }
    }
    .box-r {
      width: 25%;
      height: 100%;
      position: relative;
      bottom: 0;
      padding-right: 15px;
      .advertise {
        width: 100%;
        height: 40px;
        background-color: rgb(230, 214, 214);
        line-height: 30px;
        display: flex;
        border-radius: 5px;
        padding: 5px 10px;
        box-sizing: border-box;
        justify-content: space-between;
        position: relative;
        span {
          width: 50%;
        }
        em {
          width: 2px;
          height: 20px;
          display: inline-block;
          background-color: rgb(110, 96, 96);
          position: absolute;
          left: 140px;
          top: 10px;
        }
      }
      img {
        width: 100%;
        padding-left: 5px;
      }
    }
  }
}
</style>
