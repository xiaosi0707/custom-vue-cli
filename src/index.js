/**
 @Author：Wyunfei
 @Date：2019/3/1/18:42
 @FileName: index.js
 */
import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router/index.js'
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})
