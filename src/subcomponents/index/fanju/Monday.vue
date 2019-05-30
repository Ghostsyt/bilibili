<template>
  <div class="new-container">
    <ul>
      <li v-for="item in fanjuList" :key="item.id">
        <img :src="item.img" alt>
        <p>
          <span>{{item.tittle}}</span>
          <span>第{{item.number}}话</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fanjuList: [
        {
          id: 1,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju.png"
        },
        {
          id: 2,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju.png"
        },
        {
          id: 3,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju.png"
        },
        {
          id: 4,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju.png"
        },
        {
          id: 5,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju.png"
        },
  
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.new-container {
  ul {
    margin: 0;
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      height: 90px;
      width: 25%;
      margin-bottom: 30px;
      position: relative;
      img {
        width: 70px;
      }
      p {
        display: inline-flex;
        flex-direction: column;
        font-size: 13px;
        margin: 0;
        height: 50px;
        position: absolute;
        span {
          justify-content: space-around;
          margin-left: 4px;
        }
        span:nth-of-type(2) {
          margin-top: 30px;
          width: 60px;
          height: 20px;
          background-color: pink;
          border-radius: 7px;
          text-align: center;
          position: absolute;
          top: 20px;
        }
      }
    }
  }
}
</style>
