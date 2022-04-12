<template>
  <SidebarBlock :items="sidebarItems"/>
</template>

<script>
import SidebarBlock from "~/components/Sidebar/SidebarBlock";

export default {
  name: "SidebarHOC",
  components: {SidebarBlock},
  data() {
    return {
      sidebarItems: [
        {
          name: 'Shop',
          route: '/shop',
          icon: 'mdi-shopping-outline',
        },
        {
          name: 'Messages',
          route: '/messages',
          icon: 'mdi-message-processing-outline',
        },
        {
          name: 'Subscriptions',
          route: '/subscriptions',
          icon: 'mdi-playlist-check',
        },
        {
          name: 'Rating',
          route: '/rating',
          icon: 'mdi-fire',
        },
        {
          name: 'Bookmarks',
          route: '/bookmarks',
          icon: 'mdi-bookmark-outline',
        },
        {
          name: 'Codes',
          route: '/codes',
          icon: 'mdi-code-tags',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
