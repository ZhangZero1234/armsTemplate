import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.scss'
console.log(App);
let vm = new Vue({
    el:"#app",
    render:h=>h(App)
})
// console.log(vm.$children)