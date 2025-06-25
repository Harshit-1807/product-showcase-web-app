<template>
  <div class="product-card">
    <router-link :to="`/product/${product.id}`" class="product-card__link">
      <img
        class="product-card__image"
        :src="product.image"
        :alt="product.title"
      />
      <div class="product-card__info">
        <h2 class="product-card__title">{{ product.title }}</h2>
        <p class="product-card__price">${{ product.price.toFixed(2) }}</p>
        <p class="product-card__rating">⭐ {{ product.rating.rate }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;
  background-color: #fff;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.product-card__link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card__image {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-card__info {
  flex-grow: 1;
}

.product-card__title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.product-card__price {
  font-weight: bold;
  color: #43a047;
  margin-bottom: 0.25rem;
}

.product-card__rating {
  font-size: 0.85rem;
  color: #999;
}
</style>

