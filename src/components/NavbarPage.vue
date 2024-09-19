<template>
    <nav>
      <!-- Toolbar -->
      <v-toolbar flat app class="elevation-0 info darken-3 white--text">
        <!-- Menu Icon for Drawer -->
        <v-toolbar-side-icon @click="drawer = !drawer">
          <v-icon class="white--text">mdi-menu</v-icon>
        </v-toolbar-side-icon>
  
        <!-- App Title -->
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">App</span>
          <span class="font-weight-bold">Vuetify</span>
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <!-- Sign Out Button -->
        <v-btn text class="white--text">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar>
  
        <!-- Navigation Drawer -->
        <v-navigation-drawer
            app
            v-model="drawer"
            class="info darken-4 white--text"
            temporary
            @click-outside="drawer = false">
        </v-navigation-drawer>
    </nav>
  </template>
  
  <script>
  export default {
    data () {
      return {
        drawer: false
      }
    }
  }
  </script>
  