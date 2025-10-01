<script setup lang="ts">
import { ref } from 'vue'
import { readFunds } from './services/fundService'

const inDemo = ref(false)
const loading = ref(false)
const funds = ref([])

async function startDemo() {
  loading.value = true
  inDemo.value = true
  const { data } = await readFunds(inDemo.value)
  funds.value = data
  loading.value = false
}
</script>

<template>
  <main>
    <img src="./assets/squirrel.svg" alt="Squirrel Logo">
    <header>
      <h1 class="font-headline">Welcome to Squirrel</h1>
      <p>A financial log.</p>
    </header>
    <button
    type="button"
    :disabled="loading"
    @click="startDemo">Demo</button>
  </main>
  <footer class="font-accent">
    <p>Thank you for being here</p>
    <br>
    <p>Edgar</p>
  </footer>
</template>

<style scoped>
</style>
