import Vue from 'vue'
import App from './App'
import tabbar from './components/tabbar/tabbar.nvue'

Vue.config.productionTip = false

Vue.component('tabbar', tabbar)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
