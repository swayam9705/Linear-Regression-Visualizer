<script>
    import BarChart from './BarChart.vue'

    export default {
        name: 'Graph',
        components: { BarChart }
    }
</script>

<template>
    <div class="Graph">
        <BarChart /> 
    </div>
</template>

<style scoped>
    .Graph {
        display: grid;
        place-items: center;
    }
</style>