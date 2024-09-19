import Vue from 'vue'
import App from './App.vue'
import router from './router'  // Importing router
import vuetify from './plugins/vuetify'  // Importing Vuetify plugin

Vue.config.productionTip = false

new Vue({
  router,  // Register the router
  vuetify, // Register Vuetify
  render: h => h(App)
}).$mount('#app')
