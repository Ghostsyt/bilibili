/* 入口js */

import Vue from "vue";
import "../lib/bootstrap-3.3.7-dist/bootstrap-3.3.7-dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";
import app from "../src/app.vue"

/* 1.1导入路由的包 */
import VueRouter from 'vue-router'
/* 1.2使用VueRouter */
Vue.use(VueRouter)
/* 1.3导入自己的router.js路由模块 */
import router from './router.js'

/* 动态修改标题 */
import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueWechatTitle)

new Vue({
  el: "#app",
  render(h) {
    return h(app);
  },
  router
});