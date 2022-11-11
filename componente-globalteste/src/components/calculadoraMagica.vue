<template>
    <div v-if="calculadoraAtiva == true">
        {{ calc }}
        <button type="button" @click="adicionar1"> +1 </button>
        <button type="button" @click="adicionar2"> +2 </button>
        <button type="button" @click="dividir"> / </button>
        <hr>
        <button type="button" @click="clickDesativar"> Desativar Calculadora</button>
    </div>
    <div v-else>
        <button type="button" @click="clickAtivar"> Ativar Calculadora</button>
    </div>

</template>

<script>

export default {
    data(){
        return {
            calc: 0,
            calculadoraAtiva: true
        }
    },
    methods: {
        clickAtivar(){
            this.calculadoraAtiva = true

        },
        clickDesativar(){
            this.calculadoraAtiva = false
        },
        adicionar1(){
            this.calc++
        },
        adicionar2(){
            this.calc = this.calc + 2
        },
        dividir(){
            this.calc = this.calc / this.calc
        }

    }

}
</script>
