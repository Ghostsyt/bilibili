/* 入口js */

import Vue from "vue";
/* 引入element包 */
import ElementUI from '../node_modules/element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

/* 引入bootstrap包 */
import "bootstrap/dist/css/bootstrap.css";
/* 引入字体图标 */
import "font-awesome/css/font-awesome.css";
/* 引入mui */
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