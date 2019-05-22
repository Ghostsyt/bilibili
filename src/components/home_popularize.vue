<template>
  <div class="chiefRecommend-container">
    <h3>酋长推荐</h3>
    <div class="box">
      <div class="box-l">
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
        <img src="../../static/images/tuiguangguanggao1.jpg" alt>
      </div>
    </div>
  </div>
</template>
<script>
import { prototype } from "events";
export default {
  data() {
    return {
      videoList: [
        {
          id: 1,
          up: "大大大灯泡",
          times: "29,5",
          face: "../../static/images/face.jpg",
          tittle: "博士人"
        },
        {
          id: 2,
          up: "敖厂长",
          times: "34",
          face: "../../static/images/face2.jpg",
          tittle: "什么时候才能有女朋友？"
        },
        {
          id: 3,
          up: "10后找人带",
          times: "22",
          face: "../../static/images/face3.jpg",
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
      var oli = document.getElementsByClassName("li");
      var Progress = detile[index].getElementsByClassName("progress-true")[0];
      console.log("进度条长度" + Progress.offsetWidth + "px");
      console.log("阴影的左边距" + oli[index].offsetLeft);
      console.log("鼠标的位置是" + e.clientX);
      this.width = e.clientX - oli[index].offsetLeft;
    }
  },
  computed: {}
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
  .box {
    width: 1220px;
    height: 240px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .box-l {
      height: 100%;
      width: 75%;
      ul {
        width: 100%;
        padding: 0;
        clear: both;
        margin: 0;
        li {
          width: 160px;
          height: 100px;
          float: left;
          list-style: none;
          margin-bottom: 20px;
          margin-right: 20px;
          position: relative;
          margin-bottom: 5px;
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
          width: 70px;
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
    .box-r {
      width: 25%;
      height: 100%;
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
          left: 145px;
          top: 10px;
        }
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
