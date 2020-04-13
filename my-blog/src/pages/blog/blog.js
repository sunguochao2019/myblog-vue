import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './model/directive/directive';
import './model/filter/filter';
import store from './model/store'

//全局配置
axios.defaults.baseURL = 'http://localhost:3000/'
// axios.defaults.headers.common['Authorization'] = 'Token'
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'

// import Vueaxios from 'vue-axios'
// Vue.use(Vueaxios, axios)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ElementUI);
Vue.use(Vuex)


new Vue({
  router,
  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  store,
  render: h => h(App),
}).$mount('#app')
