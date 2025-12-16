<template>
  <div class="chart-container">
    <Scatter :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'
import { useLRStore } from '../stores/LRStore'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const store = useLRStore()

const chartData = computed(() => {
  // Combine xs and ys into {x, y} objects
  const points = store.xs.map((x, index) => ({
    x: x,
    y: store.ys[index]
  }))

  const datasets = [
    {
      label: 'Data Points',
      fill: false,
      borderColor: '#000',
      backgroundColor: '#000',
      data: points
    }
  ]

  // Add regression line if we have enough points
  if (store.xs.length >= 2) {
    const minX = Math.min(...store.xs)
    const maxX = Math.max(...store.xs)
    
    // Calculate y values using the trained model parameters (y = mx + b)
    const y1 = store.m * minX + store.b
    const y2 = store.m * maxX + store.b

    datasets.push({
      label: 'Regression Line',
      data: [
        { x: minX, y: y1 },
        { x: maxX, y: y2 }
      ],
      showLine: true,
      borderColor: '#ff0000',
      backgroundColor: '#ff0000',
      pointRadius: 0,
      borderWidth: 2
    })
  }

  return { datasets }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'X Axis'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Y Axis'
      }
    }
  }
}
</script>

<style scoped>
    .chart-container {
        position: relative;
        height: 400px;
        width: 100%;
    }
</style>
