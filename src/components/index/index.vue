<template>
  <div>
    <div class="nav-nav-right">
      <ul>
        <li
          @click.prevent="jumpTo(item.toID)"
          v-for="(item, index) in newNavList"
          :key="item.name"
          class="nav-li"
          draggable="true"
          @dragstart="dragstart(index,$event)"
          @dragend="dragend($event)"
          @drop="drop(index,$event)"
          @dragover="dragover($event)"
        >
          <a href>{{item.name}}</a>
        </li>
        <li class="Totop" @click="jumpTo('biliHeader')">
          <span class="fa fa-angle-up"></span>
          <span></span>
          <span></span>
        </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      </ul>
      <input type="hidden" name v-model="flag">
    </div>
    <biliHeader id="biliHeader"></biliHeader>
    <navMenu></navMenu>
    <chiefRecommend id="chiefRecommend"></chiefRecommend>

    <component v-for="item in newNavList" :key="item.name" :is="item.component" :id="item.toID"></component>

    <div class="placeholder"></div>
  </div>
</template>
<script>
import biliHeader from "../../subcomponents/header.vue";
import navMenu from "../../subcomponents/nav-menu.vue";
import chiefRecommend from "./chief-recommend.vue";
import popularize from "./popularize.vue";
import adveritseOne from "./advertiseOne.vue";
import adveritseTwo from "./advertiseTwo.vue";
import Donghua from "./donghua.vue";
import bangumi from "./bangumi.vue";
import guochuang from "./guochuang.vue";
import music from "./music.vue";

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
    guochuang,
    music
  },
  data() {
    return {
      Stimer: "",
      navList: [
        { index: "0", name: "动画", toID: "Donghua", component: "Donghua" },
        { index: "1", name: "番剧", toID: "bangumi", component: "bangumi" },
        { index: "2", name: "国创", toID: "guochuang", component: "guochuang" },
        { index: "3", name: "直播", toID: "" },
        { index: "4", name: "数码", toID: "" },
        { index: "5", name: "音乐", toID: "music", component: "music" },
        { index: "6", name: "娱乐", toID: "", component: "" },
        { index: "7", name: "游戏", toID: "" },
        { index: "8", name: "生活", toID: "" },
        { index: "9", name: "鬼畜", toID: "" },
        { index: "10", name: "时尚", toID: "" },
        { index: "11", name: "广告", toID: "" },
        { index: "12", name: "影视", toID: "" },
        { index: "13", name: "科技", toID: "" },
        { index: "14", name: "舞蹈", toID: "" },
        { index: "15", name: "专栏", toID: "" },
        { index: "16", name: "TV剧", toID: "" },
        { index: "17", name: "纪录片", toID: "" }
      ],
      newNavList: [],
      top: null,
      dragging: null,
      moveIndex: null,
      targetIndex: null,
      flag: 1
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
    },
    jumpTo(toID) {
      document.querySelector("#" + toID).scrollIntoView(true);
    },
    dragstart: function(index) {
      var that = this;
      //console.log("拖放开始", index);
      //记录下当前拖动的元素索引
      that.moveIndex = index;
    },
    dragover: function(event) {
      //必须添加dragover事件，不然drop事件也无效
      event.preventDefault();
    },
    dragend: function(event) {
      /* 结束位置元素 */
      // console.log("拖放结束", event.currentTarget);
    },
    drop: function(index, event) {
      var that = this;
      //阻止默认行为;
      event.preventDefault();
      //阻止默认行为;
      event.stopPropagation();
      //console.log("拖放到目标", index);
      /* 记录下目标位置索引 */
      that.targetIndex = index;

      //先保存拖动元素index
      var temp = that.newNavList[that.moveIndex];
      //将拖动元素位置index换成目标元素的index
      that.newNavList[that.moveIndex] = that.newNavList[that.targetIndex];
      //将目标元素位置index换成拖动元素的index
      that.newNavList[that.targetIndex] = temp;
      /* 将 navList更新到NewNavLIst 中 */
      that.change();
      //console.log(JSON.stringify(that.newNavList));
    },
    tran() {
      for (var i = 0; i < this.navList.length; i++) {
        /* 新数组的第i个元素为 旧数组的 index为i 的对象
          第0个对象 为 旧数组中index=0的对象
        */
        this.newNavList[i] = this.navList.find(v => v.index == i);
      }
    },
    change() {
      /* 用来刷新页面 */
      this.flag = this.flag + 1;
}
  },
  mounted() {
    window.addEventListener("scroll", this.shouScroll);
  },
  created() {
    this.tran();
  }
};
</script>
<style lang="less" scoped>
.placeholder {
  height: 4000px;
}
.nav-nav-right {
  width: 60px;

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
    position: relative;
    li {
      list-style: none;
      height: 5%;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      position: relative;
    }
    .Totop {
      width: 100%;
      height: 50px;
      font-size: 40px;
      line-height: 50px;
      position: absolute;
      background-color: rgba(73, 73, 199, 0.432);
      border-radius: 5px;
      bottom: -65px;

      span:nth-of-type(2) {
        position: absolute;
        width: 1px;
        height: 15px;
        background-color: black;
        display: block;
        left: 13px;
        top: -14px;
      }
      span:nth-of-type(3) {
        position: absolute;
        width: 1px;
        height: 14px;
        background-color: black;
        display: block;
        right: 15px;
        top: -14px;
      }
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
