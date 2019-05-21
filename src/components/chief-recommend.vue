<template>
  <div class="chiefRecommend-container">
    <h3>酋长推荐</h3>
    <div class="box">
      <div class="box-l-lunbo">
        <mt-swipe @change="handleChange">
          <mt-swipe-item>
            <a href>
              <img src="../../static/images/lunbo1.jpg" alt>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img src="../../static/images/lunbo2.jpg" alt>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img src="../../static/images/lunbo3.jpg" alt>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="box-r">
        <ul>
          <li v-for="(item, index) in videoList" :key="item.id">
            <a href>
              <img src="../../static/images/face.jpg" alt>
              <div class="detile">
                <p>{{item.tittle}}</p>
                <p>up主：{{item.up}}</p>
                <p>播放：{{item.times}}万</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoList: [
        { id: 1, up: "大大大灯泡", times: "29,5", face: "", tittle: "博士人" },
        {
          id: 2,
          up: "敖厂长",
          times: "34",
          face: "",
          tittle: "什么时候才能有女朋友？"
        },
        {
          id: 3,
          up: "10后找人带",
          times: "22",
          face: "",
          tittle: "套你猴子的"
        },
        {
          id: 4,
          up: "土味角虫",
          times: "122",
          face: "",
          tittle: "苏喂苏喂苏喂"
        },
        {
          id: 5,
          up: "余小C真的很强",
          times: "333",
          face: "",
          tittle: "王者之拉！"
        },
        {
          id: 6,
          up: "药水哥就是刘波",
          times: "333",
          face: "",
          tittle: "西蜀霸王！！"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.chiefRecommend-container {
  .box {
    width: 1220px;
    height: 280px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .box-l-lunbo {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .box-r {
      width: 60%;
      height: 100%;
      ul {
        width: 100%;
        padding: 0 10px 0px 10px;
        clear: both;
        li {
          width: 30%;
          float: left;
          list-style: none;
          margin: 5px 11px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            box-shadow: 4px 4px 2px;
          }
        }
        li:hover {
          .detile {
            display: block;
            transform: translateY(-130px);
          }
        }
      }
      .detile {
        display: none;
        position: absolute;
        z-index: 99;
        width: 100%;
        height: 131px;
        background-color: rgba(14, 11, 11, 0.432);
        border-radius: 5px;
        p {
          padding-left: 10px;
          color: #ccc;
          margin: 0;
          position: absolute;
          bottom: 0;
        }
        p:nth-of-type(1) {
          color: white;
          bottom: 70px;
        }
        p:nth-of-type(2) {
          bottom: 20px;
        }
      }
    }
  }
}
</style>
