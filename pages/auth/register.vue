<template>
  <div>
    <v-card class="pa-8">
      <h1 class="mb-6">Register</h1>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          v-model.trim="email"
          :rules="emailRules"
          label="E-mail"
          class="pt-0"
          required
        ></v-text-field>
        <v-text-field
          v-model.trim="password"
          :rules="passwordRules"
          label="Password"
          class="pt-0"
          required
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model.trim="passwordRepeat"
          :rules="passwordRepeatRules"
          label="Password Repeat"
          class="pt-0"
          required
          :type="show2 ? 'text' : 'password'"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show2 = !show2"
        ></v-text-field>

        <div class="mt-3">
          <v-btn @click="register()" color="main" dark elevation="0">
            Register
          </v-btn>
          <v-btn @click="$router.push('/auth/login')" color="main" text elevation="0">
            login
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  layout: 'empty',
  data() {
    return {
      valid: true,
      password: '123',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 2) || 'Password must be more than 2 characters',
      ],
      passwordRepeat: '',
      passwordRepeatRules: [
        v => !!v || 'Password Repeat is required',
        v => (v && v.length > 2) || 'Password must be more than 2 characters',
        v => (v && this.passwordRepeat === this.password) || 'Passwords do not match',
      ],
      email: 'user2@gmail.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
      show2: false,
    }
  },
  methods: {
    register() {
      this.$refs.form.validate()
      if (!this.valid) return

      this.$store.dispatch('auth/register', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/')
        this.$toast('Welcome :3')
      })
    }
  },
}
</script>

<style scoped>

</style>
