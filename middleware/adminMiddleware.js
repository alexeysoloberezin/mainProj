export default function ({store, redirect, route, $toast, from}) {
  if (route.name === "auth-login" || route.name === "auth-register" || route.name === "auth-logout") {
    // skip middleware
    return
  }

  store.dispatch('auth/check').then(() => {
    if (store.state.auth.role !== 'ADMIN') {
      $toast('You don`t have permission')
      redirect('/')
    }
  })
}
