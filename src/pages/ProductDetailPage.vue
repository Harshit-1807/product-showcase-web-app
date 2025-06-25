<template>
  <div class="product-detail-page">
    <h1>Product Detail</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id
</script>
