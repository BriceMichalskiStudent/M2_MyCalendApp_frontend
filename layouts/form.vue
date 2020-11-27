<template>
  <v-app>
    <Navbar />
    <v-container
      fluid
      tag="main"
      class="form"
    >
      <Nuxt />
    </v-container>
  </v-app>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
/*Problème css order. Impossible to override vutify, this is the only way : (https://stackoverflow.com/questions/56665934/nuxt-vuetify-how-to-control-the-order-in-which-css-files-are-loaded) */
@import "assets/vutify-override.css";

.form{
  margin-top: 100px;
}
</style>
