<template>
  <div class="videoListjindu-container">
    <ul>
      <li v-for="(item,index) in videoList" :key="item.id" class="li">
        <a href>
          <img :src="item.face">
          <div
            class="propu-detile"
            @mouseenter="sleep(500)"
            @mouseleave="clearWidth"
            @mousemove="getProgress(index)"
          >
            <div class="progress-all"></div>
            <div class="progress-true" ref="Progress" :style="{width:width+'px'}"></div>
          </div>
          <span class="detile-tittle">{{item.tittle}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoList: [
        {
          id: 1,
          up: "大大大灯泡",
          times: "29,5",
          face: "../../static/images/face.jpg",
          tittle: "看完这个OP，你就是我的人了！"
        },
        {
          id: 2,
          up: "敖厂长",
          times: "34",
          face: "../../static/images/face2.jpg",
          tittle:
            "【明日方舟/洗脑向】我只想迫害各位，或者被各位打死！（蛇屠箱欧拉警告！）"
        },
        {
          id: 3,
          up: "10后找人带",
          times: "22",
          face: "../../static/images/face3.jpg",
          tittle: "【新时装】博士，这件衣服适合我吗？"
        },
        {
          id: 4,
          up: "土味角虫",
          times: "122",
          face: "../../static/images/face4.jpg",
          tittle: "【孙子团】白富美既视感纯白系列EXID-Me&You翻跳"
        },
        {
          id: 5,
          up: "余小C真的很强",
          times: "333",
          face: "../../static/images/face5.jpg",
          tittle: "王者之拉！"
        }
      ],
      Detile: [],
      width: 0
    };
  },
  computed: {},
  methods: {
    sleep(dalay) {
      var start = new Date().getTime();
      while (new Date().getTime() - start < dalay) {
        continue;
      }
    },
    clearWidth() {
      this.width = 0;
    },

    getProgress(index, event) {
      var e = event || window.event;
      var detile = document.getElementsByClassName("propu-detile");
      var winodwWinth = parseInt(document.body.clientWidth);
      var oli = document.getElementsByClassName("li");
      var Progress = detile[index].getElementsByClassName("progress-true")[0];
      console.log("屏幕宽" + winodwWinth);
      console.log("进度条长度" + Progress.offsetWidth + "px");
      console.log("阴影的左边距" + oli[index].offsetLeft);
      console.log("鼠标的位置是" + e.clientX);
      this.width = e.clientX - oli[index].offsetLeft - (winodwWinth - 1220) / 2;
    }
  },
  computed: {},
  components: {}
  //   mounted() {
  //     var oDetile = document.getElementsByClassName("propu-detile");
  //     for (var i = 0; i < oDetile.length; i++) {
  //       this.Detile.push(oDetile[i]);
  //     }
  //   }
};
</script>
<style lang="less" scoped>
.videoListjindu-container {
  width: 75%;
  height: 200px;
  display: flex;
  ul {
    width: 100%;
    padding: 0;
    clear: both;
    margin: 0;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;

    li {
      width: 160px;
      height: 100px;
      float: left;
      list-style: none;
      position: relative;
      margin-bottom: 15px;
      .detile-tittle {
        font-size: 12px;
        height: 32px;
        overflow: hidden;
      }
      a:hover {
        text-decoration: none;
      }
      span {
        font-size: 14px;
        margin-top: 5px;
        display: inline-block;
        color: rgb(48, 36, 36);
      }
      span:hover {
        color: rgba(75, 75, 150, 0.541);
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
  
        // box-shadow: 4px 4px 2px rgb(207, 188, 188);
      }
    }
    li:hover {
      .propu-detile {
        display: block;
        transform: translateY(-100px);
      }
    }
  }
  .propu-detile {
    display: none;
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100px;
    background-color: rgba(14, 11, 11, 0.432);
    border-radius: 5px;
    .progress-all {
      height: 5px;
      width: 100%;
      background-color: red;
    }
    .progress-true {
      height: 5px;

      background-color: blue;
      z-index: 10;
      position: absolute;
      top: 0;
    }
    p {
      padding-left: 10px;
      color: #ccc;
      margin: 0;
      position: absolute;
      bottom: 0px;
    }
    p:nth-of-type(1) {
      color: white;
      bottom: 60px;
    }
    p:nth-of-type(2) {
      bottom: 20px;
    }
  }
}
</style>
