<script setup>
import { ref, onMounted } from 'vue'
import {
  Bar,
  BarH,
  StackedBar,
  Pie,
  Donut,
  Scatter,
  Line
} from '../components/vue3-roughviz/es'
const barData = {
  labels: ['电脑', '手机', '平板', 'd', 'e', 'f', 'g'],
  values: [10, 20, 30, 40, 50, 60, 70]
}
const stackedBarData = ref([
  { month: 'Jan', A: 20, B: 5 },
  { month: 'Feb', A: 25, B: 10 }
])
const pieData = { labels: ['a', 'b'], values: [10, 20] }
const donutData = { labels: ['a', 'b'], values: [10, 20] }
const scatterData = { x: [1, 2, 35], y: [10, 20, 8] }
const add = () => {
  stackedBarData.value.push({ month: 'Mar', A: 30, B: 15 })
  console.log(`output->stackedBarData.value`,stackedBarData.value)
}
onMounted(() => {})
</script>

<template>
  <div class="ab">
    <div @click="add">Addmonth</div>
    <StackedBar
      :chart-data="stackedBarData"
      labels="month"
      title="StackedBar"
    />
    <Bar :chartData="barData" />
    <BarH :chartData="barData" />

    <Pie :chartData="pieData" />
    <Line
      chart-data="https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv"
      title="Line Chart"
      y="favorites"
      y2="retweets"
      y3="tweets"
      yLabel="hey"
      colorVar="continent"
      highlightLabel="country"
      highlight="red"
      fillWeight="1"
      roughness="1"
      :width="600"
      :height="500"
      xLabel="ha"
    />
    <Donut
      :chartData="donutData"
      fillStyle="cross-hatch"
      stroke="black"
      :legend="true"
      title="这是一个圆饼图"
      titleFontSize="1rem"
      labels="letter"
      values="frequency"
      :width="600"
      color="pink"
      :fillWeight="1"
    />
    <Scatter :chartData="scatterData" />

  </div>
</template>

<style scoped></style>
