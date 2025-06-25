<template>
  <div class="pagination">
    <button
      class="pagination__btn"
      :disabled="store.currentPage === 1"
      @click="store.goToPage(store.currentPage - 1)"
    >
      Prev
    </button>

    <button
      v-for="page in store.totalPages"
      :key="page"
      :class="['pagination__btn', { 'pagination__btn--active': store.currentPage === page }]"
      @click="store.goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      class="pagination__btn"
      :disabled="store.currentPage === store.totalPages"
      @click="store.goToPage(store.currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore'
const store = useProductStore()
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  flex-wrap: wrap;
}

.pagination__btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.pagination__btn--active {
  background: #4caf50;
  color: white;
  border-color: #4caf50;
}

.pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
