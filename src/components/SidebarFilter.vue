<template>
  <aside class="sidebar-filter">
    <h3 class="sidebar-filter__title">Categories</h3>
    <ul class="sidebar-filter__list">
      <li
        v-for="category in store.categories"
        :key="category"
        class="sidebar-filter__item"
      >
        <label class="sidebar-filter__label">
          <input
            type="radio"
            :value="category"
            v-model="store.selectedCategory"
            class="sidebar-filter__radio"
          />
          {{ category }}
        </label>
      </li>
    </ul>
    <div class="sidebar-filter__price">
      <h4 class="sidebar-filter__subtitle">Price Range</h4>
      <div class="sidebar-filter__range">
        <input
          type="number"
          placeholder="Min"
          v-model.number="store.minPrice"
          class="sidebar-filter__input"
        />
        <span class="sidebar-filter__dash">–</span>
        <input
          type="number"
          placeholder="Max"
          v-model.number="store.maxPrice"
          class="sidebar-filter__input"
        />
      </div>
    </div>
    <div class="sidebar-filter__actions">
      <button @click="store.resetFilters" class="sidebar-filter__clear-btn">
        Clear Filters
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useProductStore } from "@/stores/productStore";

const store = useProductStore();
</script>

<style scoped>
.sidebar-filter {
  border-right: 1px solid #ddd;
  padding-right: 1rem;
}

.sidebar-filter__title {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.sidebar-filter__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-filter__item {
  margin-bottom: 0.5rem;
}

.sidebar-filter__label {
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.sidebar-filter__radio {
  margin-right: 0.5rem;
}

.sidebar-filter__price {
  margin-top: 1.5rem;
}

.sidebar-filter__subtitle {
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.sidebar-filter__range {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sidebar-filter__input {
  width: 70px;
  padding: 0.3rem 0.4rem;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.sidebar-filter__dash {
  font-size: 1.2rem;
  line-height: 1;
  color: #666;
}

.sidebar-filter__actions {
  margin-top: 1.5rem;
}

.sidebar-filter__clear-btn {
  background-color: transparent;
  border: 1px solid #aaa;
  color: #333;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sidebar-filter__clear-btn:hover {
  background-color: #f4f4f4;
  border-color: #4caf50;
  color: #4caf50;
}

</style>
