import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.scss'
import "carbon-components/scss/globals/scss/styles.scss" 
import CarbonComponentsVue from '@carbon/vue/src/index';
Vue.use(CarbonComponentsVue);
console.log(App);
let vm = new Vue({
    el:"#app",
    render:h=>h(App)
})
// console.log(vm.$children)
