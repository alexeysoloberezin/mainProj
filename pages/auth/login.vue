<template>
  <div>
    <v-card class="pa-8" >
      <h1 class="mb-6">Login</h1>
      <v-form
        ref="form"
        v-model="valid"
      >
       <v-text-field
          v-model.trim="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model.trim="password"
          :rules="passwordRules"
          label="Password"
          required
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>


        <v-btn @click="login()" color="main" dark elevation="0">
          login
        </v-btn>
        <v-btn @click="$router.push('/auth/register')" color="main" text elevation="0">
          Register
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: 'empty',
  data() {
    return {
      valid: true,
      password: '123',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 2) || 'Password must be more than 2 characters',
      ],
      email: 'user2@gmail.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
    }
  },
  methods: {
    login(){
     this.$refs.form.validate()
     if (!this.valid) return

      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/')
        this.$toast('Welcome :3')
      })
    },
  },
}
</script>

<style scoped>

</style>
