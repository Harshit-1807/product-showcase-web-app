<template>
  <div class="product-detail">
    
    <div v-if="loading" class="product-detail__loading">Loading...</div>

    <div v-else-if="product" class="product-detail__container">
      <img
        :src="product.image"
        :alt="product.title"
        class="product-detail__image"
      />

      <div class="product-detail__info">
        <h1 class="product-detail__title">{{ product.title }}</h1>
        <p class="product-detail__price">${{ product.price.toFixed(2) }}</p>
        <p class="product-detail__rating">⭐ {{ product.rating.rate }}</p>
        <p class="product-detail__desc">{{ product.description }}</p>

        <button class="product-detail__btn" @click="addToCart">Add to Cart</button>
      </div>
    </div>
    
    <div v-else class="product-detail__error">Product not found.</div>
    <BackButton />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useCartStore } from '@/stores/cartStore'
import BackButton from '@/components/BackButton.vue'

const route = useRoute()
const productId = route.params.id
const cartStore = useCartStore()

const product = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    product.value = res.data
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})

const addToCart = () => {
  if (product.value) cartStore.addToCart(product.value)
  alert("Item successfully added to cart.")
}
</script>

<style scoped>
.product-detail {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.product-detail__loading,
.product-detail__error {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}

.product-detail__container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
}

.product-detail__image {
  width: 300px;
  height: auto;
  object-fit: contain;
  border: 1px solid #ddd;
  padding: 1rem;
  background: #fff;
}

.product-detail__info {
  flex: 1;
}

.product-detail__title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-detail__price {
  font-size: 1.2rem;
  color: #4caf50;
  margin-bottom: 0.5rem;
}

.product-detail__rating {
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 1rem;
}

.product-detail__desc {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.product-detail__btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
}

</style>
