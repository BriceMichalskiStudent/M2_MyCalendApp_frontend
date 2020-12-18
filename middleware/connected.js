export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn !== true) {
    return redirect('/login')
  } else {
    for (let i = 0; i < store.state.auth.user.Roles.length; i++) {
      if (store.state.auth.user.Roles[i].code === 'ADMIN') {
        store.commit('setIsAdmin', true)
      }
    }
  }
}
