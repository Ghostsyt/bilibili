<template>
  <div class="fanju-nav-container">
    <div class="nav-top">
      <ul>
        <li>
          <a @click.prevent="whitchDay=0" href="#">最新</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=1" href>周一</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=2" href>二</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=3" href>三</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=4" href>四</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=5" href>五</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=6" href>六</a>
        </li>
        <li>
          <a @click.prevent="whitchDay=7" href>日</a>
        </li>
        <li>
          <a href>新番时间表</a>
        </li>
      </ul>
    </div>
    <div class="nav-main">
      <ul>
        <li v-if="whitchDay==0">
          <New></New>
        </li>
        <li v-if="whitchDay==1">
          <Mon></Mon>
        </li>
        <li v-if="whitchDay==2">
          <Tues></Tues>
        </li>
        <li v-if="whitchDay==3">
          <Wed></Wed>
        </li>
        <li v-if="whitchDay==4">
          <Thur></Thur>
        </li>
        <li v-if="whitchDay==5">
          <Fri></Fri>
        </li>
        <li v-if="whitchDay==6">
          <Sat></Sat>
        </li>
        <li v-if="whitchDay==7">
          <Sun></Sun>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import New from "../fanju/new.vue";
import Sun from "../fanju/Sun.vue";
import Mon from "../fanju/Monday.vue";
import Wed from "../fanju/Wed.vue";
import Thur from "../fanju/Thur.vue";
import Tues from "../fanju/Tues.vue";
import Fri from "../fanju/Fri.vue";
import Sat from "../fanju/Sat.vue";
export default {
  components: {
    New,
    Sun,
    Mon,
    Wed,
    Thur,
    Tues,
    Fri,
    Sat
  },
  data() {
    return {
      whitchDay: 0
    };
  }
};
</script>
<style lang="less" scoped>
.fanju-nav-container {
  width: 70%;
  height: 98%;
  .nav-top {
    height: 10%;
    ul {
      width: 100%;
      display: flex;
      margin: 0;
      padding-left: 100px;
      position: relative;
      li {
        list-style: none;
        height: 100%;
        width: 8%;
        margin-right: 5px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        a:hover {
          text-decoration: none;
        }
      }
      li:nth-of-type(8) {
        margin-right: 60px;
      }
      li:nth-of-type(9) {
        width: 15%;
        border: 1px solid pink;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        position: relative;
        top: 6px;
        font-size: 14px;
        a {
          color: pink;
        }
        a:hover {
          text-decoration: none;
        }
      }
      li:nth-of-type(9):hover {
        background: rgb(231, 76, 102);
        a {
          color: white;
        }
      }
    }
  }
  .nav-main {
    width: 100%;
    height: 90%;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
      }
    }
  }
}
</style>
