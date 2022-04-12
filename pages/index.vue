<template>
 <div>
   <v-btn @click="$store.dispatch('auth/check')">
     check
   </v-btn>
 </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
