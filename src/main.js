/* 入口js */

import Vue from 'vue'
import app from './app.vue'
import '../lib/bootstrap-3.3.7-dist/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



new Vue({
    el: '#app',
    render(h) {
        return h(app)
    },
})