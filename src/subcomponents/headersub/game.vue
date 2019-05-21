<template>
  <div class="game-container">
    <div class="box">
      <div class="box-l">
        <div class="box-l-t">
          <img src="../../images/game1.jpg" alt>
        </div>
        <div class="box-l-b">
          <ul>
            <li>
              <img src="../../images/game2.png" alt>
              <span>议案追生</span>
            </li>
            <li>
              <img src="../../images/game3.png" alt>
              <span>碧蓝航线</span>
            </li>
            <li>
              <img src="../../images/game4.png" alt>
              <span>明日方舟</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="box-r">
        <div class="all">
          <ul>
            <li
              v-for="(item, index) in gameList"
              :key="item.id"
              @mouseover="showGameImg(gameList[index].src)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="box-img">
        <img src="../../../static/images/gameimg1.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameList: [
        {
          id: "1",
          name: "机动都市阿尔法",
          src: "../../../static/images/gameimg1.png"
        },
        {
          id: "2",
          name: "万灵起源",
          src: "../../../static/images/gameimg2.png"
        },
        {
          id: "3",
          name: "BanG Dream!",
          src: "../../../static/images/gameimg3.png"
        },
        {
          id: "4",
          name: "皇家骑士",
          src: "../../../static/images/gameimg4.png"
        },
        {
          id: "5",
          name: "猫和老鼠",
          src: "../../../static/images/gameimg5.png"
        },
        {
          id: "6",
          name: "空之轨迹OL",
          src: "../../../static/images/gameimg2.png"
        },
        {
          id: "7",
          name: "密室3",
          src: "../../../static/images/gameimg2.png"
        }
      ]
    };
  },
  methods: {
    showGameImg(index) {
      document
        .getElementsByClassName("box-img")[0]
        .getElementsByTagName("img")[0]
        .setAttribute("src", index);
      console.log(index);
    }
  }
};
</script>
<style lang="less" scoped>
.game-container {
  li {
    list-style: none;
  }
  position: absolute;
  top: 45px;
  left: 360px;
  z-index: 99;
  .box {
    width: 500px;
    background-color: rgb(252, 251, 251);
    clear: both;
    display: flex;
    justify-content: space-between;

    .box-l {
      width: 60%;
      height: 100%;
      padding: 10px;
      .box-l-t {
        margin-bottom: 20px;
      }
      .box-l-b {
        ul {
          width: 100%;
          height: 60px;
          display: flex;
          padding: 0;
        }
        li {
          img {
            width: 70px;
            display: inline-block;
            margin-right: 15px;
            text-align: center;
          }
          span {
            margin-left: 9px;
          }
        }
      }
    }
    .box-r {
      width: 30%;
      margin-right: 30px;
      background-image: url("../../images/title.png");
      background-repeat: no-repeat;
      background-position-x: 2px;
      background-position-y: 6px;
      .all {
        box-shadow: -3px 0 1px rgb(219, 197, 197);
        margin-left: 9px;
        ul {
          width: 100%;
          height: 100%;
          padding-left: 20px;
          li {
            list-style: none;
            line-height: 30px;
            width: 100%;
          }
          li:nth-of-type(1) {
            margin-top: 30px;
          }
          li:hover {
            background-color: rgb(221, 204, 204);
            color: rgb(67, 67, 165);
          }
        }
      }
    }
  }
  .box-img {
    width: 200px;
    height: 100%;
    position: absolute;
    right: -200px;
  }
}
</style>
