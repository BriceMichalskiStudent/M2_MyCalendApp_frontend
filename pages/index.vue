<template>
  <div class="col-md-8 offset-md-2">
    <h2>Wow ! Nice slider !</h2>
    <EventCarousel />
    <br>
    <br>
    <br>
    <h2>OMG ! An other one !</h2>
    <EventCarousel />
  </div>
</template>

<script>
import EventCarousel from '~/components/EventCarousel'

export default {
  components: { EventCarousel },
  transition: 'opacity',
  data () {
    return {
      title: 'Page index',
      meta_desc: 'Je suis le magnifique content'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta_desc }
      ]
    }
  }
}
</script>

<style scoped>
.center-here {
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
