import Vue from 'vue'
import App from './App.vue'
import EscondeEsconde from './components/EscondeEsconde.vue'

Vue.config.productionTip = false
Vue.component('escondeTexto', EscondeEsconde)

new Vue({
  render: h => h(App),
}).$mount('#app')
