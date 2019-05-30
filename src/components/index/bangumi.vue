<template>
  <div class="bangumi-container">
    <div class="top-img">
      <img src="../../../static/images/ceshi.jpg" alt>
    </div>
    <div class="main">
      <div class="tittle">
        <span></span>
        <h3>番剧</h3>
      </div>
      <fanjuNav></fanjuNav>
      <fanjuPaihang></fanjuPaihang>
    </div>
  </div>
</template>
<script>
import fanjuNav from "../../subcomponents/index/fanju/fanju-nav.vue";
import fanjuPaihang from "../../subcomponents/index/fanju/fanju-paihang.vue";
export default {
  components: {
    fanjuNav,
    fanjuPaihang
  }
};
</script>
<style lang="less" scoped>
.bangumi-container {
  width: 1220px;
  height: 600px;
  margin: 0 auto;
  margin-top: 20px;

  .top-img {
    height: 15%;
    width: 100%;

    img {
      width: 98.7%;
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85%;
    position: relative;
    .tittle {
      position: absolute;
      display: flex;
      top: 0px;
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
        background-position: -140px -140px;
      }
    }
    ul {
      margin: 0;
    }
  }
}
</style>
