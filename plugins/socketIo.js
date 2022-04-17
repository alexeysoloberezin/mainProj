import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'


Vue.use(new VueSocketIO({
  debug: false,
  connection: 'http://localhost:5555',
}))

