<template>
  <LandingHero
    @login="goLogin"
    @products="goProducts"
  />
</template>

<script setup>
const goLogin = () => {
  navigateTo('/login')
}

const goProducts = () => {
  navigateTo('/products')
}
</script>
