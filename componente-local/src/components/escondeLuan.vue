<template>
    <div>
        {{ textoDecorativo }}
        <div v-for="c in 5" :key="c.id"> {{ textoDecorativo }} </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            textoDecorativo: "Talvez seja apenas um teste para melhorar!",
        }
    }

}
</script>

<style>

</style>