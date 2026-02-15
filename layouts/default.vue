<template>
  <v-app id="dlayout">
    <v-app-bar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBd-rCMOb3mnybdClbBV8u-tfxXn5ycIJXw&s"
    >
        <template v-slot:image>
          <v-img
            gradient="to right, rgba(255,255,255,.8), rgba(255,225,255,.1)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>
                <h3>DinoPee</h3>
            </v-app-bar-title>
        </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
        <!--  -->
        <v-list class="mt-3" nav>
            <v-list-item
                color="primary"
                value=""
                to="/"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-home"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    หน้าหลัก
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                color="primary"
                value=""
                to="/candidate"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-users"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    สินค้า
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                color="primary"
                value=""
                to="/developer"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-code"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    ผู้พัฒนา
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
        <v-container>
            <slot />
        </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)

  const items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ]
</script>