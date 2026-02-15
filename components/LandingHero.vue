<script setup>
const goHome = () => {
  navigateTo('/')
}

const goProducts = () => {
  navigateTo('/products')
}
</script>

<template>
  <v-container fluid class="fill-height landing-bg">

    <!-- 🔹 ปุ่ม Login มุมขวาบน -->
    <v-btn
      class="login-btn"
      size="small"
      variant="flat"
      @click="$emit('login')"
    >
      Login
    </v-btn>

    <!-- 🔹 กล่องเนื้อหากลาง -->
    <div class="content-center">

      <!-- รูป -->
      <div class="image-box">
        <v-img
          src="https://freebiehive.com/wp-content/uploads/2024/09/Flash-Sale-Text-PNG-758x473.jpg"
          contain
        />
      </div>

      <!-- ข้อความ -->
      <h1 class="title">ShopDA</h1>
      <p class="subtitle">แหล่งรวมสินค้าไอที ราคาพิเศษ</p>

      <div class="sale-text">
        SALE <span>50% OFF</span>
      </div>

    </div>

    <!-- 🔻 Footer -->
    <div class="footer">
      <div class="footer-inner">

        <div class="footer-item">
          <v-icon size="18">mdi-store</v-icon>
          <span>ShopDA © 2025</span>
        </div>

        <div class="footer-item">
          <v-icon size="18">mdi-email</v-icon>
          <span>contact@shopda.com</span>
        </div>

        <div class="footer-item">
          <v-icon size="18">mdi-phone</v-icon>
          <span>02-123-4567</span>
        </div>

      </div>
    </div>
  </v-container>

  <!-- 🧭 Side Tabs -->
  <div class="side-tabs">

    <div class="tab active" @click="goHome">
      <v-icon size="20">mdi-home</v-icon>
      <span>Home</span>
    </div>

    <div class="tab" @click="goProducts">
      <v-icon size="20">mdi-shopping</v-icon>
      <span>Products</span>
    </div>

    <div class="tab">
      <v-icon size="20">mdi-sale</v-icon>
      <span>โปรโมชั่น</span>
    </div>

    <div class="tab">
      <v-icon size="20">mdi-information</v-icon>
      <span>About</span>
    </div>

  </div>
</template>

<style scoped>
/* 🌈 พื้นหลัง */
.landing-bg {
  background: linear-gradient(135deg, #cfe8ef, #a8d8e6);
  position: relative;
}

/* 🔐 ปุ่ม Login */
.login-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: #1f65ba;
  color: white;
  border-radius: 12px;
  z-index: 10;
}

/* 📦 กล่องกลาง */
.content-center {
  max-width: 480px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 24px;
}

/* 🖼 กล่องรูป */
.image-box {
  width: 100%;
  max-width: 420px;
  height: 220px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

/* ✏️ ข้อความ */
.title {
  font-size: 2.5rem;
  font-weight: 900;
}

.subtitle {
  margin: 8px 0 16px;
  font-size: 1.1rem;
}

.sale-text {
  font-size: 2rem;
  font-weight: bold;
  color: #f9a825;
}

.sale-text span {
  color: #000;
}

/* 🔻 Footer */
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.footer-inner {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 32px;
  font-size: 0.9rem;
  color: #333;
}

.footer-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* 🧭 Side Tabs */
.side-tabs {
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 5;
}

.tab {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  min-width: 130px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 14px;
  font-size: 0.95rem;
  color: #333;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab:hover {
  transform: translateX(6px);
  background: white;
}

.tab.active {
  background: #1f65ba;
  color: white;
}

/* 📱 มือถือ */
@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
