<template>
  <div>
    <h1>
      Se connecter
    </h1>
    <div class="form-container">
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
  form{
    text-align: right;
    label{
      display: none;
    }
    input{
      width: 100%;
      padding: 20px;
      margin: 10px 0;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.3);
    }
    button{
      display: inline-block;
    }
  }

  .form-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    a{
      text-decoration: underline;
      align-self: flex-end;
    }
  }
h1{
  width: 100%;
  height: calc(10vh - 24px);
  text-align: center;
  align-self: flex-start;
}

</style>
