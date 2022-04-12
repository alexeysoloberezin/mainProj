<template>
  <v-app class="defaultApp">
    <Header/>
    <SidebarHOC/>

    <div class="container">
      <Nuxt/>
    </div>
  </v-app>
</template>

<script>
import Header from "~/components/Header/Header";
import SidebarHOC from "~/components/Sidebar/SidebarHOC";

export default {
  name: 'DefaultLayout',
  components: {SidebarHOC, Header},

}
</script>
