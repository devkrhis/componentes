<template>
    <PrimeiroComponente/>
    <hr>
    <CalcGeral/>

</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import CalcGeral from './components/CalcGeral.vue'


export default {
    name: 'App', // preciso exportar ele para o mundo saber que esse é meu componente app
    components: {
        PrimeiroComponente,
        CalcGeral
    }

}
</script>
