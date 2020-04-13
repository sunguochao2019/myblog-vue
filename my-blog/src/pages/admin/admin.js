import Vue from 'vue';
import admin from './admin.index.vue'
import router from './router/admin.router';
// import store from './store';
Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(admin),
}).$mount('#admin');