<script setup>
    import Graph from './Graph.vue';
    import Header from './Header.vue';
    import InputField from './InputField.vue';
</script>

<template>
    <div class="Home">
        <Header />
        <InputField />
        <Graph />
    </div>
</template>

<style scoped>
    .Home {
        width: 90vw;
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 100px;

        display: grid;
        grid-template-areas: "title title"
                             "points graph";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100px 350px;
        grid-gap: 20px;
    }

    @media (max-width: 800px) {
        .Home {
            grid-template-areas: "title"
                                 "points"
                                 "graph";
            grid-template-rows: 1fr 3fr 5fr;
            grid-template-columns: 1fr; 
        }
    }
</style>