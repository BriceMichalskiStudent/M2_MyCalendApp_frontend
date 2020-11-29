<template>
  <v-app>
    <v-container
      fluid
      tag="main"
      class="form-layout"
    >
      <div class="form-container col-md-8 offset-md-2">
        <nuxt-link to="/" class="to-home">
          <span class="icon-close" />
        </nuxt-link>
        <Nuxt class="content" />
      </div>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
/*Problème css order. Impossible to override vutify, this is the only way : (https://stackoverflow.com/questions/56665934/nuxt-vuetify-how-to-control-the-order-in-which-css-files-are-loaded) */
@import "assets/vutify-override.css";

.form-layout{
  background-color: $primary;
  padding: 0;
  position: relative;
  height: 100vh;
  overflow: hidden;
  &::after{
    overflow: hidden;
    z-index: 0;
    content: '';
    width: 70%;
    height: 70vh;
    position: absolute;
    top: calc( 50% - 35vh );
    left: 15%;
    background-color: rgba(255, 255, 255, 0.35);
    opacity: 35%;
    border-radius: 240px;
    transform: rotate(17deg);
  }
  &::before{
    overflow: hidden;
    z-index: 0;
    content: '';
    width: 66%;
    height: 70vh;
    position: absolute;
    top: calc( 50% - 35vh );
    left: 17%;
    background-color: rgba(255, 255, 255, 0.35);
    opacity: 35%;
    border-radius: 75px;
    transform: rotate(-5deg);
  }
}
.form-container{
  z-index: 1;
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
      font-size: 30px;
    }
  }
}
.content{
  width: 40%;
  margin: 0 auto;
}
</style>
