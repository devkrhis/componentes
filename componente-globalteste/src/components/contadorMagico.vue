<template>
    <div id="contadorM">
        {{ contador }}
        <button type="button" @click="adicionar"> Adicionar 1</button>
        <button type="button" @click="diminuir"> Diminuir -1</button>
        <button type="button" @click="zerar"> Zero absoluto</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        diminuir(){
            this.contador--
        },
        zerar(){
            this.contador = 0
        }
    }

}
</script>

<style>

</style>