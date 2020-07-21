import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCoreVideoPlayer from 'vue-core-video-player'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueCoreVideoPlayer)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
