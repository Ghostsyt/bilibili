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
          tittle: "進擊的巨人 第三季 Part.2（僅限台灣地區）",
          number: "23",
          img: "../../../static/images/fanju.png"
        },
        {
          id: 2,
          tittle: "深夜的超自然公务员",
          number: "1",
          img: "../../../static/images/fanju1.png"
        },
        {
          id: 3,
          tittle: "消灭都市 ",
          number: "8",
          img: "../../../static/images/fanju2.png"
        },
        {
          id: 4,
          tittle: "爱玩怪兽",
          number: "8",
          img: "../../../static/images/fanju3.png"
        },
        {
          id: 5,
          tittle: "一弦定音！（僅限港澳台地區）",
          number: "3",
          img: "../../../static/images/fanju5.png"
        },
        {
          id: 6,
          tittle: "我们无法一起学习",
          number: "33",
          img: "../../../static/images/fanju6.png"
        },
        {
          id: 7,
          tittle: "我們真的學不來！（僅限台灣地區）",
          number: "8",
          img: "../../../static/images/fanju7.png"
        },
        {
          id: 8,
          tittle: "博人传 火影忍者新时代",
          number: "108",
          img: "../../../static/images/fanju8.png"
        },
        {
          id: 9,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju9.png"
        },
        {
          id: 10,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju4.png"
        },
        {
          id: 11,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju6.png"
        },
        {
          id: 12,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju1.png"
        },
        {
          id: 13,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju3.png"
        },
        {
          id: 14,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju6.png"
        },
        {
          id: 15,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju4.png"
        },
        {
          id: 16,
          tittle: "博人传 火影忍者新时代",
          number: "8",
          img: "../../../static/images/fanju3.png"
        }
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
          color: white;
        }
      }
    }
  }
}
</style>
