<template>
  <div class="main-container">
    <div class="header">
      <!-- 下拉菜单区域 -->

      <div class="menu">
        <div class="menu-main">
          <div class="menu-main-l">
            <ul>
              <li>
                <a href>主站</a>
              </li>
              <li>
                <a href>音频</a>
              </li>
              <li @mouseover="turnGameFlag()" @mouseout="turnGameFlag()">
                <a href="#">游戏中心</a>
                <game v-show="gameFlag"></game>
              </li>
              <li class="live" @mouseover="turnLiveFlag()" @mouseout="turnLiveFlag()">
                <a>直播</a>
                <live v-show="liveFlag"></live>
              </li>
              <li>
                <a href>会员购</a>
              </li>
              <li>
                <a href>漫画</a>
              </li>
              <li>
                <a href>漫画</a>
              </li>
              <li>
                <a href class="downbtn">下载APP</a>
                <div class="download">
                  <img src="../../../src/images/orcode-frame.png" alt>
                  <img src="../../images/download.png" alt>
                </div>
              </li>
            </ul>
          </div>
          <div class="menu-main-r">
            <ul>
              <li>
                <a href class="denglu"></a>
              </li>
              <li>
                <a href>历史</a>
              </li>
              <li>
                <a name id class="btn btn-primary" href="#" role="button">投稿</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="search">
        <div class="logo"></div>
        <div class="search-from">
          <form class="navbar-form navbar-left" role="search" id="serchFrom">
            <div class="form-group">
              <button type="submit" class="btn btn-default">
                <span class="fa fa-bar-chart"></span> 排行榜
              </button>
            </div>
            <input type="text" class="form-control" placeholder="五彩斑斓的废土世界">
            <span class="fa fa-search searchicon"></span>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import game from "../../subcomponents/headersub/game.vue";
import live from "../../subcomponents/headersub/live.vue";
window.onload = function(params) {
  var oSearchBtn = document.getElementsByClassName("searchicon")[0];
  var oSerchFrom = document.getElementById("serchFrom");
  var oDownbtn = document.getElementsByClassName("downbtn")[0];
  var oDownimg = document.getElementsByClassName("download")[0];
  oDownbtn.onmouseover = function(params) {
    oDownimg.style.display = "block";
  };
  oDownbtn.onmouseout = function(params) {
    oDownimg.style.display = "none";
  };
  oSearchBtn.onclick = function(params) {
    oSearchBtn.submit();
  };
};
export default {
  data() {
    return {
      gameFlag: false,
      liveFlag: false
    };
  },
  methods: {
    turnGameFlag() {
      this.gameFlag = !this.gameFlag;
    },
    turnLiveFlag() {
      this.liveFlag = !this.liveFlag;
    }
  },
  components: {
    game,
    live
  }
};
</script>
<style lang="less" scoped>
.main-container {
  .live {
    position: relative;
  }
  .header {
    width: 100%;
    height: 180px;
    background-image: url("../../images/3329c9f0abfb925ae30441f24d924ad3c19775df.png");
    background-position: center center;
    position: relative;
    .menu {
      height: 50px;
      width: 100%;
      background-color: hsla(212, 35%, 51%, 0.568);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      position: relative;
      li {
        list-style: none;
        height: 100%;
        margin-right: 10px;
        text-align: center;
        line-height: 50px;
        padding: 0 10px;
        .download {
          width: 300px;
          height: 300px;
          position: absolute;
          display: none;
          img {
            width: 100%;
          }
          img:nth-of-type(2) {
            position: absolute;
            width: 130px;
            top: 30px;
            left: 85px;
          }
        }
        a {
          color: #000;
        }
        a:hover {
          text-decoration: none;
        }
      }
      li:hover {
        background-color: rgba(243, 234, 234, 0.7);
      }
      .menu-main {
        clear: both;
        width: 1220px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        ul {
          padding: 0;
          display: flex;
        }
      }
    }
    .search {
      width: 1220px;
      height: 75%;
      margin: 0 auto;
      position: absolute;
      left: 165px;
      top: 50px;
      .logo {
        width: 200px;
        height: 100px;
        background-image: url("../../images/6592e92861e6248205af17702d06ea3f97d81de6.png");
        background-repeat: no-repeat;
        position: absolute;
        top: 30px;
      }
      .search-from {
        position: absolute;
        right: 20px;
        bottom: 20px;
        button {
          color: red;
        }
        .searchicon {
          position: absolute;
          font-size: 20px;
          color: rgba(98, 98, 158, 0.199);
          right: 28px;
          top: 15px;
        }
        .searchicon:hover {
          color: pink;
        }
      }
    }
  }
}
</style>
