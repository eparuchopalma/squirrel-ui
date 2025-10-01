<script setup lang="ts">
import Auth from "./components/Auth/Index.vue"
import Dashboard from "./components/Dashboard/Index.vue"
import { authStore } from "./store/authStore"

const { isAuthenticated, inDemo } = authStore

</script>

<template>
  <Auth v-if="!isAuthenticated && !inDemo" />
  <Dashboard v-else />
</template>