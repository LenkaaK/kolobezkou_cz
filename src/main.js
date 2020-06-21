import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
