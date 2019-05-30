<template>
  <div class="zonghe-container">
    <div class="tittle">
      <span></span>
      <h3>综合</h3>
    </div>
    <VideoList></VideoList>
    <paihang></paihang>
  </div>
</template>
<script>
import VideoList from "../../subcomponents/donghua/zonghe/DonghuaList.vue";
import paihang from "../../subcomponents/donghua/zonghe/paihang.vue";
export default {
  components: {
    VideoList,
    paihang
  }
};
</script>
<style lang="less" scoped>
.zonghe-container {
  width: 1220px;
  display: flex;
  justify-content: flex-start;
  height: 355px;
  margin: 0 auto;
  margin-bottom: 160px;
  padding-top: 30px;
  position: relative;
  padding-top: 45px;

  .tittle {
    position: absolute;
    display: flex;
    top: 0;
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
}
</style>
