<template>
  <section :class="[$store.state.notificationStatus,'notification',{visible:$store.state.notification}, {visibleOut:$store.state.notificationOutAnimation}]">
    <div class="notification-icon">
      <svg
        v-if="$store.state.notificationStatus === 'error'"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        class="eva eva-alert-circle-outline"
        fill="#ffffff"
      ><g data-name="Layer 2"><g data-name="alert-circle"><rect width="24" height="24" opacity="0" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><circle cx="12" cy="16" r="1" /><path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z" /></g></g>
      </svg>
      <svg
        v-else-if="$store.state.notificationStatus === 'success' "
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        class="eva eva-checkmark-circle-outline"
        fill="#ffffff"
      ><g data-name="Layer 2"><g data-name="checkmark-circle"><rect width="24" height="24" opacity="0" /><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z" /><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z" /></g></g>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        class="eva eva-info-outline"
        fill="#ffffff"
      ><g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><circle cx="12" cy="8" r="1" /><path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" /></g></g></svg>
    </div>
    <p class="notification-message">
      {{ $store.state.notificationMessage }}
    </p>
    <div class="notification-close" @click="hideNotifications()">
      <span class="icon-close" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    hideNotifications () {
      this.$store.commit('resetNotification')
      this.$store.commit('startOutAnimation')
      setTimeout(() => {
        this.$store.commit('endOutAnimation')
      }, 600)
    }
  }
}
</script>
<style lang="scss" scoped >

.notification {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  color: white;
  font-weight: 700;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateY(-100%);
  .notification-message {
    text-align: center;
    color: white;
    flex: 1;
    margin: 0;
    padding: 0 2rem;
  }
  .notification-close {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 26px;
    &:hover {
      background: rgba(0, 0, 0, 0.12);
    }
  }
  &.success {
    background: #10c15c;
    &::after{
      background: #10c15c;
    }
  }
  &.error{
    background: #ed1c24;
    &::after{
      background: #ed1c24;
    }
  }
  &.info{
    background: #0b22e2;
    &::after {
      background: #0b22e2;
    }
  }
  &::after {
    content: "";
    position: absolute;
    height: 10%;
    width: 100%;
    bottom: 100%;
    left: 0;
  }
  &.visible {
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.12);
    animation-name: notification-in;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  &.visibleOut {
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.12);
    animation-name: notification-out;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
  }
}

@keyframes notification-in {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes notification-out {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
