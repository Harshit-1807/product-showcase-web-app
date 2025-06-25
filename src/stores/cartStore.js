import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const items = ref([])

  const addToCart = (product) => {
    const existing = items.value.find((i) => i.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (id) => {
    items.value = items.value.filter((item) => item.id !== id)
  }

  const updateQuantity = (id, quantity) => {
    const item = items.value.find((i) => i.id === id)
    if (item && quantity >= 1) {
      item.quantity = quantity
    }
  }

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
  }
})
