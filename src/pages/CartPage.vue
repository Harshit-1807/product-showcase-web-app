<template>
  <div class="cart-page">
    <h1 class="cart-page__title">Your Cart</h1>

    <div v-if="!cart.items.length" class="cart-page__empty">
      Cart is empty.
    </div>

    <table v-else class="cart-page__table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>
            <input
              type="number"
              min="1"
              :value="item.quantity"
              @input="cart.updateQuantity(item.id, +$event.target.value)"
              class="cart-page__input"
            />
          </td>
          <td>${{ item.price.toFixed(2) }}</td>
          <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td>
            <button @click="cart.removeFromCart(item.id)">❌</button>
          </td>
        </tr>
      </tbody>
    </table>
    <BackButton />
    <div class="cart-page__total">
      <strong>Total: ${{ cart.totalPrice.toFixed(2) }}</strong>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import BackButton from '@/components/BackButton.vue'
const cart = useCartStore()
</script>

<style scoped>
.cart-page {
  padding: 2rem;
}

.cart-page__title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cart-page__table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.cart-page__table th,
.cart-page__table td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: center;
}

.cart-page__input {
  width: 50px;
  padding: 0.25rem;
  text-align: center;
}

.cart-page__total {
  text-align: right;
  font-size: 1.2rem;
}

.cart-page__empty {
  text-align: center;
  font-size: 1.1rem;
  color: #888;
}

</style>
