<template>
  <div class="header px-8">
    <nuxt-link to="/" class="logo">
      <LogoIcon/>
    </nuxt-link>
    <SearchInput class="ml-4"/>
    <div class="ml-auto d-flex align-center">
      <CartBlock class="mx-2"/>
      <NotificationComponent class="mx-2"/>

      <AvatarBlock
        class="ml-3"
        :drop-items="dropItems"
        :name="userName"
      />
    </div>
  </div>
</template>

<script>
import LogoIcon from "~/components/Logo/Logo";
import SearchInput from "~/components/Search/SearchInput";
import NotificationComponent from "~/components/Notification/Notification";
import AvatarBlock from "~/components/Avatar/AvatarBlock";
import CartBlock from "~/components/Cart/CartBlock";

export default {
  name: "HeaderComponent",
  components: {CartBlock, AvatarBlock, NotificationComponent, SearchInput, LogoIcon},
  data() {
    return {
      name: '',
      dropItems: [
        {
          name: 'Logout',
          route: '/auth/logout'
        }
      ]
    }
  },
  computed: {
    userName: {
      get() {
        return this.$store.getters['user/userName']
      }
    }
  },
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100vw;
  display: flex;
  align-items: center;
  background: $bg2;
  height: $headerHeight;
}
</style>
