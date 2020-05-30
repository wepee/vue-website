import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import Default from './layout/Default.vue';
import NoBanner from './layout/NoBanner.vue';


Vue.component('default-layout', Default);
Vue.component('no-banner-layout', NoBanner);


Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
