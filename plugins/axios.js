export default function ({ $axios, store, $toast, route, redirect, $router }) {
  store.commit('auth/authToken', localStorage.getItem('authToken'))
  store.commit('auth/role', localStorage.getItem('role'))

  $axios.onError(({response}) => {
    if (response.status === 401 || response.data.message === 'User is not authorized'){
      // redirect('/auth/logout')
      console.log('asd')
      redirect('/auth/logout')
      $toast.warning('Please log-in')
      return
    }
    return response;
  });

  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${store.state.auth.authToken}`;
  });
}
