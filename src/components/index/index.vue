<template>
  <div>
    <div class="nav-nav-right">
      <ul>
        <li @click.prevent="jumpTo(item.toID)" v-for="(item, index) in navList" :key="index">
          <a href>{{item.name}}</a>
        </li>
      </ul>
    </div>
    <biliHeader></biliHeader>
    <navMenu></navMenu>
    <chiefRecommend id="chiefRecommend"></chiefRecommend>
    <popularize id="popularize"></popularize>
    <adveritseOne></adveritseOne>
    <Donghua id="Donghua"></Donghua>
    <adveritseTwo></adveritseTwo>
    <bangumi id="bangumi"></bangumi>
    <guochuang id="guochuang"></guochuang>
  </div>
</template>
<script>
import biliHeader from "./header.vue";
import navMenu from "./nav-menu.vue";
import chiefRecommend from "./chief-recommend.vue";
import popularize from "./popularize.vue";
import adveritseOne from "./advertiseOne.vue";
import adveritseTwo from "./advertiseTwo.vue";
import Donghua from "./donghua.vue";
import bangumi from "./bangumi.vue";
import guochuang from "./guochuang.vue";

export default {
  components: {
    biliHeader,
    navMenu,
    chiefRecommend,
    popularize,
    adveritseOne,
    Donghua,
    adveritseTwo,
    bangumi,
    guochuang
  },
  data() {
    return {
      Stimer: "",
      navList: [
        { name: "动画", toID: "Donghua" },
        { name: "番剧", toID: "bangumi" },
        { name: "国创", toID: "guochuang" },
        { name: "直播", toID: "" },
        { name: "数码", toID: "" },
        { name: "音乐", toID: "" },
        { name: "娱乐", toID: "" },
        { name: "游戏", toID: "" },
        { name: "生活", toID: "" },
        { name: "鬼畜", toID: "" },
        { name: "时尚", toID: "" },
        { name: "广告", toID: "" },
        { name: "影视", toID: "" },
        { name: "科技", toID: "" },
        { name: "舞蹈", toID: "" },
        { name: "专栏", toID: "" },
        { name: "TV剧", toID: "" },
        { name: "纪录片", toID: "" }
      ],
      top: null
    };
  },
  methods: {
    shouScroll() {
      var navLi = document
        .getElementsByClassName("nav-nav-right")[0]
        .getElementsByTagName("li");
      var oNavRight = document.getElementsByClassName("nav-nav-right")[0];
      this.top = parseInt(document.documentElement.scrollTop);
      if (this.top >= 300) {
        var navTop = parseInt(oNavRight.style.top);
        oNavRight.style.top = 2 + "px";
      } else {
        oNavRight.style.top = 250 + "px";
      }
      if (this.top > 300 && this.top < 850) {
        navLi[0].classList.add("hightLight");
      } else {
        navLi[0].classList.remove("hightLight");
      }
      if (this.top > 850 && this.top < 1500) {
        navLi[1].classList.add("hightLight");
      } else {
        navLi[1].classList.remove("hightLight");
      }
      if (this.top > 1500 && this.top < 1900) {
        navLi[2].classList.add("hightLight");
      } else {
        navLi[2].classList.remove("hightLight");
      }
      console.log(this.top);
    },
    jumpTo(toID) {
      document.querySelector("#" + toID).scrollIntoView(true);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.shouScroll);
  }
};
</script>
<style lang="less" scoped>
.nav-nav-right {
  width: 40px;
  height: 1000px;
  background-color: rgb(230, 217, 219);
  border: 1px solid rgb(168, 153, 153);
  position: fixed;
  margin-left: 1360px;
  border-radius: 5px;
  top: 250px;
  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    li {
      list-style: none;
      height: 3%;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
    }
    a:hover {
      text-decoration: none;
    }
    li:hover {
      background-color: rgb(44, 55, 216);
      a {
        color: white;
      }
    }
    .hightLight {
      background-color: rgb(44, 55, 216);
      a {
        color: white;
      }
    }
  }
}
</style>
