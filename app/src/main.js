import '.font-awesomw-frere'
import './css/_variables.css'

import Vue from 'vue'
import App from './App.vue'

import './config/bootstrap'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
