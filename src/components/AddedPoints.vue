<script setup>
    import { useLRStore } from '../stores/LRStore'

    const store = useLRStore()
</script>

<template>
    <div class="AddedPoints">
        <p class="subtitle">Added Points</p>
        <ul class="list">
            <li v-for="(x, index) in store.xs" :key="index">
                <span class="coord">{{ x }}</span>
                <span class="coord">{{ store.ys[index] }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>

    .list {
        list-style-type: none;
    }

    .list li {
        margin: 20px 0;
    }

    .coord {
        margin: 0 5px;
        width: 40px;
        height: 40px;
        background: lightgrey;
    }

</style>