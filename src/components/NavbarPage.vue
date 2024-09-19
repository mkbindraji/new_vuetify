<template>
    <v-app>
      <v-app-bar flat app>
  
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
  
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">App</span>
          <span class="font-weight-bold">Vuetify</span>
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn variant="text" color="lighten-2">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-navigation-drawer app v-model="drawer" class="indigo">
        <v-list-item class="pa-4">
          <v-list-item-content>
            <v-list-item-title class="error">Navigation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </v-app>
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
  