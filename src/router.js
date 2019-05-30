import VueRouter from 'vue-router'
import index from './components/index/index.vue'
import donghuaindex from './components/donghua/donghuaIndex.vue'
import fanju from './components/fanju/fanjuIndex.vue'
const router = new VueRouter({
    routes: [{
            path: '/',
            component: index,
            meta: {
                title: '苟思特~哔哩哔哩'
            }
        }, {
            path: '/donghua',
            component: donghuaindex,
            meta: {
                title: '动画~哔哩哔哩'
            }
        },
        {
            path: '/fanju',
            component: fanju,
            meta: {
                title: '番剧~哔哩哔哩'
            }
        },
        {
            path: '/donghua',
            component: donghuaindex
        },
        {
            path: '/donghua',
            component: donghuaindex
        },
        {
            path: '/donghua',
            component: donghuaindex
        },
    ]
})
export default router