import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import store from "store"
Vue.prototype.$store = store;


// main.js，注意要在use方法之后执行
// 引入uview
// main.js
import uView from "uview-ui";
Vue.use(uView);

App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif



// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif