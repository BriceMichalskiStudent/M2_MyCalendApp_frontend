<template>
  <section class="profile">
    <img src="/img/placeholder-profile.jpg">
    <div class="data">
      <p>Alban Pierson</p>
      <p><span>2</span> évènements a venir</p>
    </div>
    <div class="action">
      <ul>
        <li>
          <nuxt-link to="/profile">
            Mon compte
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">
            Mes évènements
          </nuxt-link>
        </li>
        <li>
          <a @click="logout">
            Déconnexion
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
<style lang="scss" scoped>
.profile{
  height: 50px;
  border: 1px solid rgba(0,0,0,0.1);
  position: relative;
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    display: inline-block;
  }
  .data{
    display: inline-block;
    height: 40px;
    margin: 5px;
    vertical-align: top;
    p{
      padding: 0;
      margin: 0;
      font-size: 14px;
      line-height: 19px;
      &:first-of-type{
        font-family:'Montserrat Bold', sans-serif;
      }
      &:last-of-type{
        font-family: "Montserrat Italic", sans-serif;
        color: #939393;
        & span{
          font-family:'Montserrat Bold', sans-serif;
        }
      }
    }
  }
}
.action{
  height: auto;
  background-color: #c3c3c3;
  border-radius: 6px;
  position: absolute;
  margin: 10px;
  left: -10px;
  bottom: -158px;
  width: 100%;
  ul{
    padding: 0;
    li{
      list-style: none;
      height: 44px;
      padding: 10px 15px;
      position: relative;
      a{
        font-size: 14px;
        line-height: 24px;
        color: black;
      }
      &:last-of-type{
        border-top: solid 1px black;
      }
      &:after{
        opacity: 0;
        transition-duration: 0.4s;
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 15px;
        right: 20px;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 11px solid $secondary;
        border-radius: 2px;
      }
      &:hover:after{
        opacity: 1;
      }
    }
  }
}
</style>
