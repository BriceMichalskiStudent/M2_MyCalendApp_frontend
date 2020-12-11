<template>
  <div class="center-here">
    <div>
      <EventCard />
      <br>
      <br>
      <br>
      <div class="links">
        <nuxt-link
          to="/admin"
          class="button--green"
        >
          Admin Panel
        </nuxt-link>
        <a
          href="https://github.com/MyCalendApp/frontend"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'

export default {
  components: { EventCard },
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
