<template>
  <div class="paihangAll-container">
    <ul>
      <li class="First">
        <span class="highLight">1</span>
        <a href>
          <div class="first-main">
            <img src="../../../../static/images/timg.jpg" alt>
            <div class="first-detile">
              <p>{{paihangList[0].tittle}}</p>
            </div>
            <span>综合评分:{{paihangList[0].score}}</span>
          </div>
        </a>
      </li>
      <li class="First">
        <span class="highLight">1</span>
        <a href>
          <div class="first-main">
            <img src="../../../../static/images/timg.jpg" alt>
            <div class="first-detile">
              <p>{{paihangList[0].tittle}}</p>
            </div>
            <span>综合评分:{{paihangList[0].score}}</span>
          </div>
        </a>
      </li>
      <li class="First">
        <span class="highLight">1</span>
        <a href>
          <div class="first-main">
            <img src="../../../../static/images/timg.jpg" alt>
            <div class="first-detile">
              <p>{{paihangList[0].tittle}}</p>
            </div>
            <span>综合评分:{{paihangList[0].score}}</span>
          </div>
        </a>
      </li>
      <li class="normal" v-for="(item, index) in paihangList" :key="index">
        <span>{{item.id+1}}</span>
        <a>{{item.tittle}}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paihangList: [
        {
          id: 1,
          tittle:
            "华为美国公司首席安全官采访全程！看他一一化解嘉宾全部刁钻问题",
          score: "44.3万"
        },
        {
          id: 2,
          tittle:
            "华为美国公司首席安全官采访全程！看他一一化解嘉宾全部刁钻问题",
          score: "44.3万"
        },
        {
          id: 3,
          tittle:
            "华为美国公司首席安全官采访全程！看他一一化解嘉宾全部刁钻问题",
          score: "44.3万"
        },
        {
          id: 4,
          tittle:
            "华为美国公司首席安全官采访全程！看他一一化解嘉宾全部刁钻问题",
          score: "44.3万"
        },
        {
          id: 5,
          tittle:
            "华为美国公司首席安全官采访全程！看他一一化解嘉宾全部刁钻问题",
          score: "44.3万"
        },
        {
          id: 6,
          tittle:
            "华为美国公司首席安全官采访全程！看他一一化解嘉宾全部刁钻问题",
          score: "44.3万"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.paihangAll-container {
  width: 50%;
  height: 100%;
  float: left;

  ul {
    padding: 0;
    .First {
      padding-left: 30px;
      position: relative;
      a {
        color: rgb(41, 33, 33);
      }
      > span {
        position: absolute;
        left: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
        background-color: pink;
        text-align: center;
        border-radius: 5px;
      }
      width: 290px;
      height: 70px;

      .first-main {
        float: left;
        img {
          width: 60px;
          float: left;
        }
        span {
          width: 290px;
          height: 30px;
          float: left;
          font-size: 12px;
          position: absolute;
          color: #cccccc;
        }
        .first-detile {
          margin-bottom: 5px;
          p {
            font-size: 12px;
            line-height: 20px;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
    .normal {
      padding-left: 30px;
      position: relative;
      width: 270px;
      height: 40px;
      a {
        color: rgb(41, 33, 33);
      }
      > span {
        position: absolute;
        left: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
        background-color: pink;
        text-align: center;
        border-radius: 5px;
      }
      a {
        height: 20px;
        line-height: 28px;
        overflow: hidden;
        font-size: 13px;
        display: inline-block;
      }
    }
    a:hover {
      text-decoration: none;
    }
  }
}
</style>
