<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fundStore } from '../../store/fundStore'

onMounted(() => setFunds())

const loading = ref(false)

async function setFunds() {
  loading.value = true
  const { errorMessage } = await fundStore.getFunds()
  if (errorMessage) alert(errorMessage)
  loading.value = false
}

</script>

<template>
  <main>
    <h1 class="font-headline">Your dashboard</h1>
    <p v-if="loading">...Loading</p>
    <dl v-if="fundStore.funds.length">
      <div v-for="fund in fundStore.funds" :key="fund.id">
        <dt>{{ fund.name }}</dt>
        <dd>{{ fund.balance }}</dd>
      </div>
    </dl>
  </main>
</template>