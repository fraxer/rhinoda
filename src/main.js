import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/global.css'

Vue.config.productionTip = false

Vue.use(router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
