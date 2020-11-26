<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">
            Register!
          </h2>

          <Notification v-if="error" :message="error" />

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Prénom</label>
              <div class="control">
                <input
                  v-model="firstName"
                  type="text"
                  class="input"
                  name="username"
                  placeholder="Prénom"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Nom</label>
              <div class="control">
                <input
                  v-model="lastName"
                  type="text"
                  class="input"
                  name="username"
                  placeholder="Nom"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Telephone</label>
              <div class="control">
                <input
                  v-model="phone"
                  type="text"
                  class="input"
                  name="username"
                  placeholder="06 78 78 78 78"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="mail"
                  type="mail"
                  class="input"
                  name="mail"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  type="password"
                  class="input"
                  name="password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Register
              </button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  middleware: 'guest',
  components: {
    Notification
  },

  data () {
    return {
      firstName: '',
      lastName: '',
      mail: '',
      password: '',
      phone: '',
      error: null
    }
  },

  methods: {
    async register () {
      try {
        await this.$axios.post('user', {
          firstName: this.firstName,
          lastName: this.lastName,
          mail: this.mail,
          password: this.password,
          phone: this.phone
        })

        await this.$auth.loginWith('local', {
          data: {
            mail: this.mail,
            password: this.password
          }
        })
        await this.$axios.post('token', {
          mail: this.mail,
          password: this.password
        }).then((response) => { this.$auth.setUser(response.data.user) })
        await this.$router.push('/profile')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
