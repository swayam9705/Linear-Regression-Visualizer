<script setup>
    import { useLRStore } from '../stores/LRStore'

    const store = useLRStore()
</script>

<template>
    <div class="AddedPoints">
        <p class="subtitle">Added Points</p>
        <ul class="list">
            <li v-for="(x, index) in store.xs" :key="index">
                <div class="coord">{{ x }}</div>
                <div class="coord">{{ store.ys[index] }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

    .list {
        list-style-type: none;
    }

    .list li {
        margin: 5px 0;
        display: flex;
    }

    .coord {
        margin: 0 5px;
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        background: lightgrey;
        border-radius: 7px;
    }

</style>