import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css'
import './assets/css/materialdesignicons.min.css'
import './assets/css/mobiriseicons.css'
import './assets/css/magnific-popup.css'
import './assets/css/animate.min.css'
import './assets/css/owl.carousel.css'
import './assets/css/owl.theme.css'
import './assets/css/owl.transitions.css'
import './assets/css/style.css'
import './assets/css/default.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
