import Vue from 'vue'
import App from './app.vue';
import router from './router'

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router
  }).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })