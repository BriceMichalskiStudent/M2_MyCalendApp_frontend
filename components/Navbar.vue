<template>
  <nav :class="{active: isActive}">
    <div
      :class="{active: isActive}"
      class="hamburger hamburger--collapse"
      @click="myFilter"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner" />
      </div>
    </div>
    <ul>
      <li>
        <nuxt-link to="/">
          <Logo height="40px" width="auto" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Évènements
        </nuxt-link>
      </li>
      <li v-if="isAuthenticated">
        <nuxt-link to="/profile">
          {{ loggedInUser.firstName }}
        </nuxt-link>
      </li>
      <li v-else>
        <nuxt-link to="/login">
          Connexion
        </nuxt-link>
      </li>
      <li v-if="isAuthenticated">
        <a @click="logout">
          Déconnexion
        </a>
      </li>
      <li>
        <Button link="/" anchor="Cree mon évènement" type="primary" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/Button'

export default {
  components: { Button },
  data () {
    return {
      isActive: false,
      test: true
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    },
    myFilter () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
$topDivHeight: 0px;
$hamburgerBoxWidth: 20px;
$hamburgerBoxHeight: 20px;
$hamburgerBoxPadding: 20px;
$hamburgerLineThickness: 2px;
$hamburgerLineSpaceBetween: 6px;
$hamburgerLineBorderRadius: 4px;

$navAnimationDuration: 0.7s;
$navAnimationTiming: ease-out;

nav {
  height: 100px;
  width: 90%;
  position: fixed;
  transition-duration: $navAnimationDuration;
  transition-timing-function: $navAnimationTiming;
  background-color: transparent;
  overflow: hidden;
  z-index: 1;
  right: 5%;
  backdrop-filter: blur(10px);
  border-radius: 0 0 10px 10px;
  &.active {
    height: 100vh;
    ul li, ul li.selected, ul p {
      color: black;
    }
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    height: 100px;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
    position: relative;
    li {
      display: flex;
      width: auto;
      margin: 5px 20px;
      color: black;
      position: relative;
      border-radius: 8px;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      font-size: .9375rem;
      white-space: nowrap;
      a {
        text-decoration: none;
        color: inherit;
        display: inherit;
        width: 100%;
        padding: 10px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          height: 15px;
          width: 0;
          bottom: 5px;
          left: -5px;
          background-color: white;
          transition-duration: 0.4s;
          transition-timing-function: ease;
        }
        &.exact-active-link{
          &:before {
            width: 60%;
            bottom: 5px;
            z-index: -1;
            background-color: $primary!important;
          }
        }
      }
      &:first-of-type{
        position: absolute;
        left: 0;
      }
    }
    li:first-of-type, li:last-of-type{
      a.exact-active-link:before {
        display: none;
      }
    }
  }
}

/* For mobile only */
@media only screen and (max-width: map-get($grid-breakpoints, 'md')){
  /* Burger MENU */
.hamburger{
  z-index: 1;
  padding: $hamburgerBoxPadding;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  position: absolute;
  top: 0;
  right: 0;
  //right: calc((( #{$hamburgerBoxPadding} * 2 ) + #{$hamburgerBoxWidth}) * -1)
  &:hover{
    opacity: 0.7;
  }
  &:hover{
    opacity: 0.7;
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after{
      background-color: white;
    }
  }
}

.hamburger-box{
  width: $hamburgerBoxWidth;
  height: $hamburgerBoxHeight;
  display: inline-block;
  position: relative;
}
.hamburger-inner{
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,.hamburger-inner::before, .hamburger-inner::after{
  width: $hamburgerBoxWidth;
  height: $hamburgerLineThickness;
  background-color: white;
  border-radius: $hamburgerLineBorderRadius;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before, .hamburger-inner::after{
  content: "";
  display: block;
}

.hamburger-inner::before{
  top: calc(#{$hamburgerLineSpaceBetween} * -1);
}
.hamburger-inner::after{
  bottom: calc(#{$hamburgerLineSpaceBetween} * -1)
}

/* Collapse Animation */
.hamburger--collapse {
  .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::after {
      top: -12px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
    }

    &::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
  &.active {
    .hamburger-inner {
      transform: translate3d(0, -10px, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
      }

      &::before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}

/* nav placement */
nav {
  height: 60px;
  width: 100%;
  background-color: #F5C107;
  backdrop-filter: none;
  border-radius: unset;
  right: 0;
  &.active {
    height: 100vh;
    ul li, ul li.selected, ul p {
      color: white;
    }
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    height: calc(100vh - #{$topDivHeight});
    flex-direction: column;
    justify-content: center;
    padding: 0;

    li {
      display: flex;
      width: 100%;
      margin: 5px 0;
      color: #F0F0F5;
      position: relative;
      border-radius: 8px;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      font-size: .9375rem;
      white-space: nowrap;
      a {
        text-decoration: none;
        color: inherit;
        display: inherit;
        width: 100%;
        padding: 10px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 0;
          left: -10px;
          top: 0;
          border-radius: 0 2px 2px 0;
          height: 40px;
          background-color: white;
          transition-duration: 0.4s;
          transition-timing-function: ease;
        }
        &.exact-active-link{
          &:before {
            background-color: $primary!important;
            width: 4px;
          }
        }
      }
    }
  }
}
}
</style>
