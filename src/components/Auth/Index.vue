<script setup lang="ts">
import { authStore } from "../../store/authStore"

async function startDemo() {
  authStore.loginForDemo()
}

</script>

<template>
  <main>
    <img src="../../assets/squirrel.svg" alt="Squirrel Logo">
    <header>
      <h1 class="font-headline">Welcome to Squirrel</h1>
      <p>A financial log.</p>
    </header>
    <button
    class="button button_secondary"
    type="button"
    @click="startDemo">Demo</button>
  </main>
  <footer class="font-accent">
    <p>Thank you for being here</p>
    <br>
    <p>Edgar</p>
  </footer>
</template>