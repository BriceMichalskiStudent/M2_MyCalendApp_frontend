<template>
  <p v-if="$fetchState.pending">
    Récupération en cours...️
  </p>
  <p v-else-if="$fetchState.error">
    Une erreur est survenue :(
  </p>
  <section v-else class="col-md-8 offset-md-2 row">
    <h1>
      Mon Compte
    </h1>
    <div class="content col-md-8 offset-md-2">
      <img :src="user.imgUrl" class="profile">
      <form method="post" @submit.prevent="updateAccount">
        <div class="input-group">
          <label>Prenom</label>
          <input type="text" :value="user.firstName" :v-model="editedUser.firstName">
        </div>
        <div class="input-group">
          <label>Nom</label>
          <input type="text" :value="user.lastName" :v-model="editedUser.lastName">
        </div>
        <div class="input-group">
          <label>Numero de telephone</label>
          <input type="text" :value="user.phone" :v-model="editedUser.phone">
        </div>
        <div class="input-group">
          <label>Adresse email</label>
          <input type="email" :value="user.mail" :v-model="editedUser.mail">
        </div>
        <h2> Changer de mots de passe </h2>
        <div class="input-group">
          <label>Mots de passe</label>
          <input type="password" :v-model="editedUser.password">
        </div>
        <div class="input-group">
          <label>Validation mots de passe</label>
          <input type="password" :v-model="editedUser.validatePassword">
        </div>
        <Button type="submit" custom="primary large" anchor="Mettre a jour !" />
      </form>
      <hr>
      <h2> Zone de danger !</h2>
      <form method="post" @submit.prevent="deleteAccount">
        <Button type="submit" custom="Secondary large" anchor="Supprimer mon compte !" />
      </form>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@media only screen and (max-width: map-get($grid-breakpoints, 'md')){
  .row{
    margin: 0;
  }
}
.profile{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
  margin: 40px;
  align-self: center;
}
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
form{
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  .input-group{
    label{
      display: unset;
    }
    margin: 0 20px;
    width: calc(50% - 40px);
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      margin: 0 10px;
      width: calc(100% - 20px);
    }
  }
  h2{
    width: calc(100% - 40px);
    margin: 30px 20px;
  }
  button{
    margin: 20px 0;
  }
}
</style>
<script>

import Button from '~/components/Button'
export default {
  components: { Button },
  middleware: 'connected',
  transition: 'opacity',
  fetch () {
    Object.assign(this.user, this.$auth.user)
  },
  data () {
    return {
      title: 'Page index',
      meta_desc: 'Je suis le magnifique content',
      user: {},
      editedUser: {
        firstName: '',
        lastName: '',
        phone: '',
        mail: '',
        password: '',
        validatePassword: ''
      }
    }
  },
  methods: {
    updateAccount () {
      try {
        this.$store.commit('sendNotification', {
          status: 'success',
          message: 'Votre profile a ete modifier avec succès !'
        })
        this.$router.push('/profile')
      } catch (e) {
        this.$store.commit('sendNotification', {
          status: 'error',
          message: e
        })
        this.$router.push('/login')
      }
    },
    async deleteAccount () {
      await this.$axios
        .delete('/user/' + this.user._id)
        .then(
          this.$store.commit('sendNotification', {
            status: 'success',
            message: 'Votre compte a ete supprimer avec succès !'
          }))
        .catch(error => (
          this.$store.commit('sendNotification', {
            status: 'error',
            message: error
          })
        ))
      this.$router.push('/')
    }
  }
}
</script>
