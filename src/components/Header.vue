<template>
  <header class="header">
    <div class="header__logo">🛍️ Shop</div>
    <nav class="header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ccc;
}
.header__logo {
  font-weight: bold;
}
.header__nav a {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}
</style>
