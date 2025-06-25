<template>
  <div class="home-page">
    <h1 class="home-page__title">All Products</h1>
    <div class="home-page__layout">
      <SidebarFilter class="home-page__sidebar" />
      <div class="home-page__main">
        <SortDropdown class="home-page__sort" />
        <Loader v-if="store.loading" />
        <ProductList
          v-else-if="store.paginatedProducts.length"
          :products="store.paginatedProducts"
        />
        <div v-else class="home-page__no-data">No products found.</div>
        <Pagination v-if="store.totalPages > 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/productStore'

import SidebarFilter from '@/components/SidebarFilter.vue'
import SortDropdown from '@/components/SortDropdown.vue'
import ProductList from '@/components/ProductList.vue'
import Pagination from '@/components/Pagination.vue'
import Loader from '@/components/Loader.vue'

const store = useProductStore()

onMounted(() => {
  if (!store.products.length) {
    store.fetchProducts()
    store.fetchCategories()
  }
})
</script>


<style scoped>
.home-page {
  padding: 1.25rem 2rem 2rem;
}

.home-page__title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 0;
}

.home-page__layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.home-page__sidebar {
  width: 220px;
  flex-shrink: 0;
}

.home-page__main {
  flex: 1;
}

.home-page__sort {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
}

.home-page__no-data {
  padding: 2rem;
  font-size: 1.1rem;
  color: #888;
  text-align: center;
}

</style>
