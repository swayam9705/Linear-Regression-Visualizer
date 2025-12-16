<script setup>
    import { ref } from "vue"
    import { useLRStore } from "../stores/LRStore"
import AddedPoints from "./AddedPoints.vue"

    const x = ref(null)
    const y = ref(null)
    const store = useLRStore()

    const handleAddPoint = () => {
        if (x.value !== null && y.value !== null) {
            store.addPoint(Number(x.value), Number(y.value))
            x.value = null
            y.value = null
        }
    }
</script>

<template>
    <div class="InputField">
        <p class="InputField-subtitle">Points</p>
        <input type="number" placeholder="x value" v-model="x" />
        <input type="number" placeholder="y value" v-model="y" /> <br />
        <button class="InputField-btn" v-on:click="handleAddPoint">Add Point</button>
        <AddedPoints v-if="store.xs.length > 0" />
    </div>
</template>

<style scoped>
    .InputField {
        grid-area: points;
        padding: 20px;
        background: whitesmoke;
    }

    .InputField-subtitle {
        font-size: 1.2rem;
    }

    .InputField input {
        padding-left: 10px;
        width: 150px;
        height: 30px;
        margin: 10px 10px 10px 0;
        border: 1px solid black;
        outline: none;
        background: transparent;
    }

    .InputField input::placeholder {
        color: rgb(81, 81, 81);
    }

    .InputField-btn {
        width: 150px;
        height: 40px;
        display: grid;
        place-items: center;
        background: black;
        border: none;
        outline: none;
        color: white;
        font-size: 1rem;
        margin: 10px 0;
        cursor: pointer;
    }
</style>
