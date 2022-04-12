<template>
  <v-app >
    <div> </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  beforeCreate() {
    this.$router.push('/')
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
