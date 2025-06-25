<template>
  <div class="app">
    <Header />
    <main class="app__content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style scoped>
.app {
  font-family: sans-serif;
}
.app__content {
  padding: 2rem;
}
</style>
