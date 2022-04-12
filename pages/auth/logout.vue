<template>
  <h1>Logout ...</h1>
</template>

<script>
export default {
  name: "LogoutPage",
  mounted() {
    console.log('in the login logout')
    this.$store.commit('auth/logout')
    this.$router.push(`/auth/login`)
  },
}
</script>

<style scoped>

</style>
