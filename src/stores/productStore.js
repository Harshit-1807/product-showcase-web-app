import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  const categories = ref([]);
  const selectedCategory = ref("all");
  const minPrice = ref(null);
  const maxPrice = ref(null);
  const selectedSort = ref("default");
  const loading = ref(false);
  const currentPage = ref(1);
  const productsPerPage = 10;

  const fetchProducts = async () => {
    try {
      loading.value = true;
      const res = await axios.get("https://fakestoreapi.com/products");
      products.value = res.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      loading.value = false;
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      categories.value = ["all", ...res.data];
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const filteredProducts = computed(() => {
    if (!products.value.length) return [];

    let list = [...products.value];

    if (selectedCategory.value !== "all") {
      list = list.filter((p) => p.category === selectedCategory.value);
    }

    if (minPrice.value !== null) {
      list = list.filter((p) => p.price >= minPrice.value);
    }

    if (maxPrice.value !== null) {
      list = list.filter((p) => p.price <= maxPrice.value);
    }

    switch (selectedSort.value) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rating":
        list.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    return list;
  });

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * productsPerPage;
    const end = start + productsPerPage;
    return filteredProducts.value.slice(start, end);
  });

  const totalPages = computed(() =>
    Math.ceil(filteredProducts.value.length / productsPerPage)
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const resetFilters = () => {
    selectedCategory.value = "all";
    minPrice.value = null;
    maxPrice.value = null;
    selectedSort.value = "default";
    currentPage.value = 1;
  };

  return {
    products,
    categories,
    selectedCategory,
    selectedSort,
    minPrice,
    maxPrice,
    loading,
    fetchProducts,
    fetchCategories,
    filteredProducts,
    paginatedProducts,
    currentPage,
    totalPages,
    goToPage,
    resetFilters,
  };
});
