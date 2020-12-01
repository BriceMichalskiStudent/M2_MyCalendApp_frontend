<template>
  <div>
    <h1>
      Se connecter
    </h1>
    <div class="login-container">
      <form method="post" @submit.prevent="login">
        <label class="label">Email</label>
        <input
          v-model="mail"
          type="email"
          name="mail"
          placeholder="test@mail.com"
        >
        <label class="label">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="Mot de passe"
        >
        <Button anchor="Se connecter" type="submit" />
      </form>
      <hr>
      <p>
        Vous n'avez pas encore de compte ?
      </p>
      <nuxt-link to="/register">
        Se cree un compte
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: { Button },
  layout: 'form',
  transition: 'opacity',
  data () {
    return {
      mail: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login () {
      try {
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
<style lang="scss" scoped>
h1{
  width: 100%;
  height: calc(8vh - 24px);
  text-align: center;
  align-self: flex-start;
  font-size: 30px;
  line-height: 40px;
  padding-top: 10px;
}
form{
  text-align: right;
  label{
    display: none;
  }
  button{
    margin: 20px 0;
    display: inline-block;
  }
}

.login-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 62vh;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
    height: 92vh;
  }
  a{
    text-decoration: underline;
    align-self: flex-end;
  }
}

</style>
