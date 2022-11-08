<template>
    <h1> Calculadora Geral</h1>
    <span> {{ numero }} </span>
    <div class="Calculadora">
        <div class="buttons">
        <button type="button" @click="somar"> Soma +1</button>
        <button type="button" @click="subtrair"> Subtrair -1 </button>
        <button type="button" @click="multiplicar"> Multiplicar *</button>
        <button type="button" @click="dividir"> Dividir /</button>
        <button type="button" @click="zerar"> Zera tudo</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CalcGeral',
    data(){
        return{
            numero: 0
        }
    },
    methods: {
        somar(){
            this.numero++
        },
        subtrair(){
            this.numero--
        },
        multiplicar(){
            this.numero = this.numero * this.numero

        },
        dividir(){
            this.numero = this.numero / this.numero

        },
        zerar(){
            this.numero = 0
        }
    }
}
</script>

<style>

    span {
        width: 100px;
        height: 100px;
        border: 1px solid;
        margin-left: 14%;
        background-color: gold;
        padding: 10px;
    }   

    .Calculadora button{
        margin-top: 20px;
        margin-left: 5px;
        width:100px;
        height:100px;
        border-radius: 40%;
        background-color: rgb(202, 136, 12);
    }

</style>