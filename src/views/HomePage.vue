<template>
    <div class="home">
      <h1>HomePage</h1>
      <v-btn class="pink white--text">Click me</v-btn><br><br>
      <v-btn depressed color="pink">Click me</v-btn><br><br>
      <v-btn flat color="pink">Click me</v-btn><br><br>

      <v-btn depressed class="pink white--text">
        <v-icon left>mdi-email</v-icon>
        <span>email me</span>
      </v-btn><br><br>

      <v-btn depressed small class="pink white--text">
        <v-icon left small>mdi-email</v-icon>
        <span>email me</span>
      </v-btn><br><br>

      <v-btn depressed large class="pink white--text">
        <span>email me</span>
        <v-icon right large>mdi-email</v-icon>
      </v-btn><br><br>

      <v-btn depressed fab dark color="purple" dense>
        <v-icon left>mdi-heart</v-icon>
      </v-btn>


    </div>
  </template>
  
  <script>
    export default {
    
    }
  </script>
  