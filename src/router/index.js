/**
 @Author：Wyunfei
 @Date：2019/3/1/19:36
 @FileName: index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        }
    ]
})

