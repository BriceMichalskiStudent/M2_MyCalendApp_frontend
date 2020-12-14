export default function ({ store, redirect }) {
  if (store.isAdmin === false) {
    return redirect('/login')
  }
}
