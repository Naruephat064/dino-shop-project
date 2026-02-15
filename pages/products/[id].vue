<template>
  <div v-if="product" class="detail">
    <img :src="product.image" />
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p class="price">{{ product.price }} บาท</p>

    <button @click="addToCart">เพิ่มลงตะกร้า</button>
  </div>
</template>

<script setup>
import products from '~/data/products.json'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const cart = useCart()

const product = products.find(
  (p) => p.id === Number(route.params.id)
)

const addToCart = () => {
  cart.add(product)
  alert('เพิ่มสินค้าแล้ว')
}
</script>

<style scoped>
.detail {
  padding: 30px;
}

img {
  width: 300px;
  border-radius: 16px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #5b2d8b;
}

button {
  background: #5b2d8b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
}
</style>
