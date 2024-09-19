<template>
  <v-app>
    <v-content>
      <router-view></router-view> <!-- Use "router-view" not "route-view" -->
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

