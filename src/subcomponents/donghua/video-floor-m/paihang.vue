
<template>
  <div class="paihang-container">
    <p>
      <span>排行</span>
      <span @mouseover="allShow">全部</span>
      <span @mouseover="yuanShow">原创</span>
    </p>
    <div class="guochuang-paihang-main-view">
      <div class="guocuang-paihang-main">
        <paihangALL></paihangALL>
        <paiahngYuan></paiahngYuan>
      </div>
    </div>
  </div>
</template>
<script>
import paiahngYuan from "./paiahngYuan.vue";
import paihangALL from "./paihangALL.vue";
export default {
  components: {
    paiahngYuan,
    paihangALL
  },
  data() {
    return {
      show: 1,
      timer: "",
      ismoving: "false"
    };
  },
  mounted() {},
  methods: {
    allShow() {
      var paihang = document.getElementsByClassName("guocuang-paihang-main")[0];
      paihang.classList.remove("showYuan");
      paihang.classList.add("showAll");
    },
    yuanShow() {
      var paihang = document.getElementsByClassName("guocuang-paihang-main")[0];
      paihang.classList.remove("showAll");
      paihang.classList.add("showYuan");
    }
  }
};
</script>
<style lang="less" scoped>
.paihang-container {
  width: 25%;
  float: right;
  position: relative;

  padding-right: 15px;
  left: 0;
  top: -40px;
  .guochuang-paihang-main-view {
    width: 100%;
    height: 150%;
    overflow: hidden;
    position: relative;
  }
  .guocuang-paihang-main {
    width: 210%;
    height: 100%;
    position: absolute;
    left: 0;
  }

  > p {
    span:nth-of-type(1) {
      font-size: 22px;
    }
    span {
      margin-right: 20px;
    }
  }
  .showAll {
    left: 0px;
    transition: 0.5s all ease;
  }
  .showYuan {
    left: -310px;
    transition: 0.5s all ease;
  }
}
</style>
