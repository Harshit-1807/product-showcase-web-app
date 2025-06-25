<template>
  <div class="sort-dropdown">
    <label class="sort-dropdown__label">Sort by:</label>
    <select
      v-model="store.selectedSort"
      class="sort-dropdown__select"
    >
      <option value="default">Default</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating">Popularity</option>
      <option value="name">Name (A-Z)</option>
    </select>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore'

const store = useProductStore()
</script>

<style scoped>
.sort-dropdown {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
.sort-dropdown__label {
  margin-right: 0.5rem;
}
.sort-dropdown__select {
  padding: 0.25rem 0.5rem;
}
</style>
