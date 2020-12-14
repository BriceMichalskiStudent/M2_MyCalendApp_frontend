<template>
  <section class="info-bar">
    <p class="big">
      <span class="icon-calendar" /> 01 / 10 / 2020
    </p><p class="big">
      <span class="icon-location_pin" /> Villeurbanne
    </p>
    <p class="big">
      <span class="icon-bars" /> Sport & Loisir
    </p>
  </section>
</template>
<script>

</script>
<style lang="scss" scoped>
.info-bar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
span{
  font-size: 20px;
  line-height: 30px;
  padding: 0 10px;
  color: $primary;
  vertical-align: bottom;
}
</style>
