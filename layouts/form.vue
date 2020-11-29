<template>
  <v-app>
    <v-container
      fluid
      tag="main"
      class="form"
    >
      <div class="form-container col-md-8 offset-md-2">
        <nuxt-link to="/" class="to-home">
          <span class="icon-home" />
        </nuxt-link>
        <Nuxt class="content" />
      </div>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
/*Problème css order. Impossible to override vutify, this is the only way : (https://stackoverflow.com/questions/56665934/nuxt-vuetify-how-to-control-the-order-in-which-css-files-are-loaded) */
@import "assets/vutify-override.css";
.form{
  background-color: $primary;
  padding: 0;
}
.form-container{
  display: flex;
  align-items: center;
  margin: 15vh auto;
  height: 70vh;
  background-color: white;
  border-radius: 6px;
  flex-direction: column;
  position: relative;
  .to-home{
    position: absolute;
    top: 20px;
    right: 40px;
    span{
      font-size: 40px;
    }
  }
}
.content{
  width: 40%;
  margin: 0 auto;
}
</style>
