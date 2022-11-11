<template>
    <div v-if="verificar == true">
        <h1> Agora você está me vendo</h1>
        <button type="button" @click="verificar = false"> Clique Aqui</button>
    </div>
    <div v-else>
        <h2> Agora você não está me vendo</h2>
        <button type="button" @click="verificar = true"> Clique Aqui</button>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            verificar: true
        }
    }
}
</script>

<style>

</style>