<template>
  <v-app class="grey lighten-4">

    <NavbarPage></NavbarPage>

    <v-content>
      <router-view></router-view> <!-- Use "router-view" not "route-view" -->
    </v-content>

  </v-app>
</template>

<script>

import NavbarPage from '@/components/NavbarPage'

export default {
  name: 'App',
  components: {
    NavbarPage
  },
  data: () => ({
    // Add your data properties here
  })
};

</script>

