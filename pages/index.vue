<template>
  <div class="center-here">
    <div>
      <Logo height="300px" width="auto" />
      <h1>
        MyCalendAPP
      </h1>
      <h2>
        Test H2
      </h2>
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
export default {
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
