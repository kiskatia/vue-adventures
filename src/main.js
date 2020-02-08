import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo);
Vue.use(VCalendar);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
