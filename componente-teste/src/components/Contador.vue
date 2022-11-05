<template>
    <div class="contador">
        <h1> Operacoes Matematicas </h1>
        <span> {{ contador }}</span>
        <button type="button" @click="Soma()"> Somar +1 </button>
        <button type="button" @click="Diminuicao()"> Diminuir -1</button>
        <button type="button" @click="Multiplicacao()"> Multiplicacao *</button>
        <button type="button" @click="Divisor()"> Divisao /</button>
    </div>

</template>

<script>
export default {
    name: 'Contador',
    data(){
        return{
            contador: 0
        }
    },
    methods:{
        Soma(){
            this.contador++
        },
        Diminuicao(){
            this.contador--
        },
        Multiplicacao(){
            this.contador = this.contador * this.contador
        },
        Divisor(){
            this.contador = this.contador / this.contador
        },
        Zerador(){
            this.contador = 0
        }
    }
}

</script>

<style>
</style>