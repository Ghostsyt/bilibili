<template>
  <div class="nav-container">
    <ul class="nav-left">
      <li class="nav-left-home">
        <a href>
          <p>
            <span class="fa fa-home"></span>
            <span>首页</span>
          </p>
        </a>
      </li>
      <li v-for="(item, index) in navList" :key="item.id" class="nav-left-normal">
        <a>
          <div @mouseenter="showDetile(index)" @mouseleave="hideDetile(index)">
            <p>{{item.number}}</p>
            <router-link to tag="p" >{{item.name}}</router-link>
            <div class="nav-left-normal-detile" v-if="showdetile==index">
              <ul>
                <li v-for="item in navList[index].detile" :key="item.id">
                  <a href>
                    <span class="fa fa-angle-right"></span>
                    {{item}}
                    <span class="fa fa-angle-left"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <ul class="nav-right">
      <li>
        <a href>
          <p>
            <span></span>
            <span>专栏</span>
          </p>
        </a>
      </li>
      <li>
        <a href>
          <p>
            <span></span>
            <span>广场</span>
          </p>
        </a>
      </li>
      <li>
        <a href>
          <p>
            <span></span>
            <span>直播</span>
          </p>
        </a>
      </li>
      <li>
        <a href>
          <p>
            <span></span>
            <span>小黑屋</span>
          </p>
        </a>
      </li>
      <li>
        <a href>
          <p>
            <span></span>
            <span>小黑屋</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          name: "动画",
          number: "999+",
          href: "/donghua",
          detile: ["MAD·AMV", "syt"]
        },
        {
          id: 2,
          name: "番剧",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 3,
          name: "国创",
          number: "999+",
          detile: [
            "国产动画",
            "国产原创相关",
            "布袋戏",
            "资讯",
            "新番时间表",
            "国产动画索引"
          ]
        },
        {
          id: 4,
          name: "音乐",
          number: "999+",
          detile: ["原创音乐", "翻唱", "电音", "演奏", "MV", "音乐现场"]
        },
        {
          id: 5,
          name: "舞蹈",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 6,
          name: "游戏",
          number: "999+",
          detile: ["宅舞", "三次元舞蹈", "舞蹈教程"]
        },
        {
          id: 7,
          name: "科技",
          number: "999+",
          detile: [
            "单机游戏",
            "电子竞技",
            "手机游戏",
            "网络游戏",
            "桌游棋牌",
            "GMV",
            "音游",
            "游戏赛事"
          ]
        },
        {
          id: 8,
          name: "数码",
          number: "999+",
          detile: ["手机平板", "电脑装机", "摄影摄像", "影音智能"]
        },
        {
          id: 9,
          name: "生活",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 10,
          name: "鬼畜",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 11,
          name: "时尚",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 12,
          name: "广告",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 13,
          name: "娱乐",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 14,
          name: "影视",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        },
        {
          id: 15,
          name: "放映厅",
          number: "999+",
          detile: [
            "连载动画",
            "完结动画",
            "资讯",
            "官方延伸",
            "新番时间表",
            "番剧索引"
          ]
        }
      ],
      showdetile: 1000
    };
  },
  methods: {
    showDetile(index) {
      this.showdetile = index;
    },
    hideDetile() {
      this.showdetile = 1000;
    }
  }
};
</script>
<style lang="less" scoped>
.nav-container {
  width: 1220px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  .nav-left {
    width: 80%;
    display: flex;
    padding: 0;
    margin: 0;
    .nav-left-home {
      list-style: none;
      width: 6%;
      line-height: 50px;
      text-align: center;
      a {
        color: black;
      }
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-top: 7px;
        color: black;
        span:nth-of-type(1) {
          color: pink;
          position: absolute;
          font-size: 25px;
        }
      }
    }
    .nav-left-normal {
      list-style: none;
      width: 6%;
      line-height: 50px;
      text-align: center;
      a {
        color: black;
      }
      a:hover {
        text-decoration: none;
      }
      div {
        width: 100%;
        height: 100%;
        position: relative;
        p {
          margin: 0;
          padding: 0;
          display: block;
          height: 50%;
          line-height: 25px;
          font-size: 13px;
        }
        p:nth-of-type(1) {
          width: 30px;
          height: 15px;
          background: pink;
          border-radius: 5px;
          line-height: 16px;
          margin: 0 auto;
          font-size: 11px;
          color: white;
          margin-bottom: 5px;
        }
      }
      .nav-left-normal-detile {
        width: 150px;
        height: 200px;
        z-index: 9999;
        position: relative;
        left: -10px;
        top: -5px;
        ul {
          padding: 0;
          margin: 0;
          background-color: white;
          width: 100%;

          li {
            list-style: none;
            text-align: left;
            font-size: 13px;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            padding-left: 10px;
            a {
              display: inline-block;
              position: relative;
            }
            span {
              width: 5px;
              height: 20px;
              text-align: center;
              display: inline-block;
            }
            span:nth-of-type(2) {
              position: relative;
              left: 140px;
            }
          }
          li:hover {
            background-color: rgb(120, 120, 180);
            a {
              transform: translateX(10px);
              transition: 0.2s all ease;
              > span:nth-of-type(2) {
                transform: translateX(-140px;);
                transition: 0.2s all ease;
              }
            }
          }
        }
      }
    }
  }
}
.nav-right {
  width: 20%;
  display: flex;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    width: 20%;
    line-height: 50px;
    text-align: center;
  }
}
</style>
