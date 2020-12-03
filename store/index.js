export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}

export const state = () => ({
  notification: false,
  notificationStatus: 'info',
  notificationMessage: 'Bye Bye !',
  notificationOutAnimation: false
})

export const mutations = {
  sendNotification (state, object) {
    state.notification = true
    state.notificationStatus = object.status
    state.notificationMessage = object.message
  },
  resetNotification (state) {
    state.notification = false
    state.notificationMessage = 'Bye Bye !'
  },
  startOutAnimation (state) {
    state.notificationOutAnimation = true
  },
  endOutAnimation (state) {
    state.notificationOutAnimation = false
  }
}
