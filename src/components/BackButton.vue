<template>
  <button class="back-button" @click="goBack">← Back</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.back-button {
  display: inline-block;
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0;
  text-decoration: underline;
}

.back-button:hover {
  color: #4caf50;
}
</style>
