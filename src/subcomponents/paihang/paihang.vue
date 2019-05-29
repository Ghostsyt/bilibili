
<template>
  <div class="paihang-container">
    <p>
      <span>排行</span>
      <span @mouseover="allShow">全部</span>
      <span @mouseover="yuanShow">原创</span>
    </p>
    <div class="paihang-main">
      <paihangALL></paihangALL>
      <paiahngYuan></paiahngYuan>
    </div>
  </div>
</template>
<script>
import paiahngYuan from "../../subcomponents/paihang/paiahngYuan.vue";
import paihangALL from "../../subcomponents/paihang/paihangALL.vue";
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
      if (this.ismoving == "true") {
        console.log("no");
      } else {
        console.log("点击了全部");
        this.ismoving = "true";
        var paihang = document.getElementsByClassName("paihang-main")[0];
        var left = parseInt(paihang.offsetLeft);
        var timer = setInterval(() => {
          left = parseInt(paihang.offsetLeft);

          if (left < 0) {
            paihang.style.left = left + 20 + "px";
          } else {
            clearInterval(timer);
            this.ismoving = "false";
            console.log("nmsl1");
          }
        }, 20);
      }
    },
    yuanShow() {
      if (this.ismoving == "true") {
        console.log("no");
      } else {
        this.ismoving = "true";
        var paihang = document.getElementsByClassName("paihang-main")[0];
        var left = parseInt(paihang.offsetLeft);
        console.log("点击了原创");
        var timer = setInterval(() => {
          left = parseInt(paihang.offsetLeft);
          if (left >= -310) {
            paihang.style.left = left - 20 + "px";
          } else {
            this.ismoving = "false";
            clearInterval(timer);
            console.log("nmsl2");
          }
        }, 20);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.paihang-container {
  width: 25%;
  float: right;
  position: relative;
  overflow: hidden;
  padding-right: 15px;
  left: 0;
  top: -40px;
  .paihang-main {
    width: 210%;
    height: 100%;
    position: absolute;
  }
  p {
    span:nth-of-type(1) {
      font-size: 22px;
    }
    span {
      margin-right: 20px;
    }
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
