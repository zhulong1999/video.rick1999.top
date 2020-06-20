import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Axios
import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.prototype.$axios = axios  //全局注册，使用方法为:this.$axios
Vue.use(vueAxios, axios)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
