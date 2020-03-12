import Vue from 'vue'
import App from './App'
import tabbar from './components/tabbar/tabbar.nvue'
import { http } from './common/requests/index.js'

Vue.config.productionTip = false

Vue.component('tabbar', tabbar)

Vue.prototype.$http = http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
