# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Product Showcase App

A Vue 3 web application that displays products fetched from a mock API with filtering, sorting, pagination, and cart functionality. Built using Composition API, Pinia, and BEM CSS.

---

## Features

- Responsive layout (desktop/mobile friendly)
- Product listing grid
- Category + Price Range filters
- Sort by Price, Name, or Rating
- Product detail page
- Add to Cart functionality
- Cart page with total price and quantity editing
- Clear filters / reset option
- Pagination (10 items per page)

---

## Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API)
- [Pinia](https://pinia.vuejs.org/) for state management
- [Vue Router](https://router.vuejs.org/) for routing
- [Axios](https://axios-http.com/) for API requests
- BEM CSS

---

## API Used

Data is fetched from:  
[https://fakestoreapi.com/](https://fakestoreapi.com/)

---

## Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/product-showcase.git
cd product-showcase

# Install dependencies
npm install

# Start development server
npm run dev