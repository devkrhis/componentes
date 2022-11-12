<template>
    <div class="contador">
        <div class="numero">
            <h1> {{ contador }} </h1>
        </div>
        <button type="button" @click="aumenta1"> + </button>
        <button type="button" @click="diminui1"> - </button>
        <button type="button" @click="zeroAbsoluto"> 0 </button>
    </div>
</template>


<script>
// import escondeLuanVue from './escondeLuan.vue'
export default {
    data(){
        return {
            contador: 0
        }
    },
    methods: {
        aumenta1(){
            this.contador++
        },
        diminui1(){
            this.contador--
        },
        zeroAbsoluto(){
            this.contador = 0
        }
    }

}
</script>

<style>

.numero{
    margin-left: 60px;
    height: 50px;
    width: 50px;
    border: 1px solid blue;
    background-color: wheat;
}

.contador {
    display: inline-block;
}

.contador button {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 1px solid black;
    background-color: coral;
    box-shadow: inset -10px -10px 10px #660, inset 3px 3px 5px #fff;
    margin: 5px;
}

</style>