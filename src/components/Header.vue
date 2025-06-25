<template>
  <header class="header">
    <div class="header__logo">🛍️ Product Showcase</div>
    <nav class="header__nav">
      <router-link to="/" class="header__link">Home</router-link>

      <router-link to="/cart" class="header__cart">
        Cart
        <span v-if="cart.items.length" class="header__badge">{{ totalQuantity }}</span>
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { computed } from 'vue'

const cart = useCartStore()

const totalQuantity = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity, 0)
)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
}

.header__logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header__link {
  text-decoration: none;
  color: #333;
  position: relative;
}

.header__cart {
  position: relative;
  text-decoration: none;
  color: #333;
}

.header__badge {
  position: absolute;
  top: -8px;
  right: -14px;
  background-color: #4caf50;
  color: white;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 50%;
  font-weight: bold;
}

</style>
