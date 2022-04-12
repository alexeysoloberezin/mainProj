export default function ({store, redirect, route, $toast, from}) {
  if (route.name === "auth-login" || route.name === "auth-register" || route.name === "auth-logout") {
    // skip middleware
    return
  }

  if (!localStorage.getItem('authToken')) {
    setTimeout(() => {
      store.dispatch('auth/check')
    }, 300)
  }
}
