<template>
  <div class="product-card">
    <img :src="product.image" class="product-card__image" />
    <h2 class="product-card__title">{{ product.title }}</h2>
    <p class="product-card__price">${{ product.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
}
.product-card__image {
  width: 100%;
}
.product-card__title {
  font-weight: bold;
}
.product-card__price {
  color: #4caf50;
}
</style>