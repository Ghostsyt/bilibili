<template>
  <div class="live-container">
    <div class="box">
      <div class="box-l">
        <h3>热门直播</h3>
        <ul>
          <li v-for="(item, index) in liveList" :key="item.id">
            <a href>
              <img src="../../images/timg.jpg" alt>
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="box-r">
        <h3>热门活动</h3>
        <div>
          <a href>
            <img src="../../images/live1.jpg" alt>
          </a>
        </div>
        <div>
          <a href>
            <img src="../../images/live2.png" alt>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liveList: [
        { id: 1, name: "痒局长", header: "" },
        { id: 2, name: "羊局长", header: "" },
        { id: 3, name: "龙局长", header: "" },
        { id: 4, name: "伊利亚局长", header: "" },
        { id: 5, name: "蛇局长", header: "" },
        { id: 6, name: "牛局长", header: "" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.live-container {
  background-color: #fff;
  width: 500px;
  height: 300px;
  z-index: 9099;
  padding: 5px;
  top: 50px;
  position: absolute;
  left: 0px;
  li {
    list-style: none;
  }
  position: absolute;
  .box {
    display: flex;
    justify-content: space-between;

    .box-l {
      width: 50%;
      h3 {
        text-align: left;
      }
      ul {
        width: 100%;
        padding: 0;
        li {
          width: 30%;
          float: left;
          margin-right: 5px;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
    .box-r {
      width: 50%;

      h3 {
        text-align: left;
      }
      img {
        width: 100%;
        margin-bottom: 10px;
        border-radius: 4px;
      }
    }
  }
}
</style>
