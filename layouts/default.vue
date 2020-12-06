<template>
  <v-app>
    <Notification />
    <Navbar />
    <v-container
      fluid
      tag="main"
      class="default-layout"
    >
      <Nuxt />
    </v-container>
  </v-app>
</template>
<style>
/* Problème css order. Impossible to override vutify, this is the only way : (https://stackoverflow.com/questions/56665934/nuxt-vuetify-how-to-control-the-order-in-which-css-files-are-loaded) */
@import "assets/vutify-override.css";

</style>
<script>
import Navbar from '~/components/Navbar'
import Notification from '~/components/Notification'

export default {
  components: {
    Navbar,
    Notification
  }
}
</script>
