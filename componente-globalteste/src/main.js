import Vue from 'vue'
import App from './App.vue'
import contadorMagico from './components/contadorMagico.vue'
import escondedorMagico from './components/escondedorMagico.vue'
import calculadoraMagica from './components/calculadoraMagica.vue'

Vue.config.productionTip = false
Vue.component('teste-contador', contadorMagico)
Vue.component('esconde-esconde', escondedorMagico)
Vue.component('calcMagica', calculadoraMagica)

new Vue({
  render: h => h(App),
}).$mount('#app')
