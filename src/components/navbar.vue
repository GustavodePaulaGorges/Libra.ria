<script>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <nav>
        <RouterLink class="HeadLinks" to="/home">Home</RouterLink>
        <RouterLink class="HeadLinks" to="/categorias">Categorias</RouterLink>
        <RouterLink class="HeadLinks" to="/autores">Autores</RouterLink>
        <RouterLink class="HeadLinks" to="/editoras">Editoras</RouterLink>
    </nav>
</template>
<style>
    nav{
        background-color: #5b223f;
        width: 100%;
        padding: 2vh 1vh;
        height: fit-content;
        color: aliceblue;

    }
</style>
