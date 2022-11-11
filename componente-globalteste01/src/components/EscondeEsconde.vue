<template>
    <div id="esconde" v-if="openMagic == true">
        {{ textoInvertido }}
        <button type="button" @click="clickNoOpen"> Clique para sair!</button>
    </div>
    <div v-else>
        <h2> Você não tem autorização para acessar esse site</h2>
        <button type="button" @click="clickOpen"> Clique aqui para acessar</button>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            textoInvertido: "Seja bem vindo ao mundo magico de Bobby",
            openMagic: false
        }
    },
    methods: {
        clickOpen(){
            this.openMagic = true
        },
        clickNoOpen(){
            this.openMagic = false
        }
    }
}
</script>

<style>

</style>