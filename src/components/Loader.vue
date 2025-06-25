<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.loader__spinner {
  width: 40px;
  height: 40px;
  border: 5px solid #ddd;
  border-top-color: #4caf50;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
