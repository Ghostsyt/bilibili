<template>
  <div class="fanju-paihang-container">
    <p>排行</p>
    <div class="paihang-main">
      <ul>
        <li v-for="(item, index) in paihangList" :key="item.id">
          <span class="paihangIndex">{{item.id}}</span>
          <a href>
            <p @mouseover="ShowDetile(index)" @mouseout="HideDetile(index)">
              <span>{{item.name}}</span>
              <span>更新至第{{item.number}}话</span>
            </p>
          </a>
          <div class="detile" v-if="DetileFlag==index">
            <div class="detile-top">
              <img src="../../../../static/images/timg.jpg" alt>
              <p>
                <span>{{item.name}}</span>
                <span>更新至第{{item.number}}话</span>
              </p>
            </div>
            <hr>
            <div class="detile-bot">
              <span class="fa fa-play-circle">{{item.times}}</span>
              <span class="fa fa-align-left">{{item.danmu}}</span>
              <span class="fa fa-heart">{{item.collect}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paihangList: [
        {
          id: 1,
          name: "鬼灭之刃",
          number: "8",
          times: "31235",
          danmu: "313",
          collect: "134555"
        },
        {
          id: 2,
          name: "JOJO的奇妙冒险 黄金之风",
          number: "31",
          times: "56456",
          danmu: "5122 ",
          collect: "134555"
        },
        {
          id: 3,
          name: "我们无法一起学习",
          number: "8",
          times: "21974612 ",
          danmu: "694 ",
          collect: "134555"
        },
        {
          id: 4,
          name: "多罗罗",
          number: "20",
          times: "49866325 ",
          danmu: "4021",
          collect: "134555"
        },
        {
          id: 5,
          name: "盾之勇者成名录",
          number: "20",
          times: "96371116 ",
          danmu: "6575 ",
          collect: "134555"
        },
        {
          id: 6,
          name: "川柳少女",
          number: "8",
          times: "548074 ",
          danmu: "307",
          collect: "134555"
        },
        {
          id: 7,
          name: "贤者之孙",
          number: "7",
          times: "369272 ",
          danmu: "313",
          collect: "134555"
        },
        {
          id: 8,
          name: "天使降临到我身边",
          number: "37",
          times: "237004 ",
          danmu: "760 ",
          collect: "134555"
        },
        {
          id: 9,
          name: "鬼灭之刃",
          number: "8",
          times: "162606 ",
          danmu: "949 ",
          collect: "134555"
        },
        {
          id: 10,
          name: "鬼灭之刃",
          number: "8",
          times: "548074",
          danmu: "313",
          collect: "134555"
        }
      ],
      DetileFlag: 1000,
      timer: ""
    };
  },
  mounted() {
    var list = document.getElementsByClassName("paihangIndex");

    for (var i = 0; i < 3; i++) {
      list[i].classList.add("highLight");
    }
  },
  methods: {
    ShowDetile(index) {
      this.sleep(120);
      this.DetileFlag = index;
    },
    HideDetile(index) {
      this.DetileFlag = 1000;
    },
    sleep(dalay) {
      var start = new Date().getTime();
      while (new Date().getTime() - start < dalay) {
        continue;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.fanju-paihang-container {
  width: 30%;
  height: 100%;
  padding: 10px 10px;

  > p {
    font-size: 20px;
  }

  .paihang-main {
    height: 100%;
    width: 100%;
    .highLight {
      background-color: pink;
    }

    ul {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        height: 10%;
        display: block;
        position: relative;
        > span {
          width: 20px;
          height: 20px;
          display: inline-block;
          text-align: center;
          color: white;
          background-color: rgb(173, 128, 128);
          border-radius: 5px;
        }
        .detile {
          width: 400px;
          height: 150px;
          position: absolute;
          top: -160px;
          background-color: rgb(21, 153, 185);
          border-radius: 10px;
          z-index: 99;
          padding: 10px 10px;
          hr {
            margin: 0;
            padding: 0;
          }
          .detile-top {
            height: 70%;
            width: 100%;
            display: flex;

            img {
              width: 25%;
            }
            p {
              display: inline-flex;
              flex-direction: column;
              justify-content: space-around;
              height: 100%;
            }
          }
          .detile-bot {
            height: 27%;
            width: 100%;
            padding-top: 10px;
            box-sizing: border-box;
            span {
              margin-left: 10px;
              margin-right: 30px;
            }
            ::before {
              margin-right: 5px;
            }
          }
        }

        > a p {
          display: inline-block;
          span:nth-of-type(1) {
            font-size: 14px;
            color: rgb(51, 38, 38);
            margin-right: 15px;
          }
          span:nth-of-type(2) {
            font-size: 13px;
            color: #ccc;
          }
        }
        p:hover {
          span:nth-of-type(1) {
            color: rgb(48, 48, 196);
          }
        }
      }
    }
  }
}
</style>
