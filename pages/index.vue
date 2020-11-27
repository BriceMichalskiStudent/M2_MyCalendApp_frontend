<template>
  <div class="center-here">
    <div>
      <Logo height="300px" width="auto" />
      <h1 class="title">
        MyCalendAPP
      </h1>
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
  },
  transition: 'opacity'
}
</script>

<style scoped>
.center-here {
  background-color: #f8f9fe ;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
