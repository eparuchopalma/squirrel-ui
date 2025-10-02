<script setup lang="ts">
import { authStore } from "../../store/authStore"

async function startDemo() {
  authStore.loginForDemo()
}

</script>

<template>
  <main>
    <div class="logo">
      <img src="../../assets/squirrel.svg" alt="Squirrel Logo" class="logo__img">
    </div>
    <header>
      <h1 class="headline">Squirrel</h1>
      <h4 class="title">Financial Log</h4>
    </header>
    <div class="button-container">
      <button
      class="button button_secondary"
      type="button"
      @click="startDemo">Start Demo</button>
    </div>
  </main>
  <footer class="footer">
    <ul class="link-container">
      <li>
        <img src="../../assets/brand_light.svg" alt="Brand logo" class="brand-logo">
      </li>
      <li>
        <a href="#" class="link">Website</a>
      </li>
      <li>
        <a href="#" class="link">LinkedIn</a>
      </li>
    </ul>
    <p class="footer__text">
      Thank you for being here.
      <br>
      Edgar
    </p>
  </footer>
</template>

<style scoped>

.logo {
  width: 140px;
  margin: 32px auto;
  padding: 12px 12px 6px;
  border-radius: 20px;
  box-shadow: 1px 1px 4px #111;
}

.logo__img {
  width: 100%;
  height: auto;
}

.brand-logo {
  width: 24px;
  height: auto;
}

.headline {
  margin-bottom: 10px;
  font-size: 64px;
}

.footer {
  height: 120px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
}

.footer__text {
  padding-right: 20px;
  display: inline-block;
  font-size: 24px;
  font-family: "Sacramento", cursive;
  font-weight: 400;
  font-style: normal;
  transform: rotate(-25deg);
}

.link-container {
  padding: 0 12px;
  display: flex;
  justify-self: start;
  align-self: end;
  gap: 16px;
  list-style: none;
}

.link {
  font-weight: 400;
  font-size: 14px;
  color: var(--lightest);
}
</style>