<template>
  <v-navigation-drawer
    v-model="openSidebar"
    absolute
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img v-if="userAvatar" :src="userAvatar" ></v-img>
        <AvatarBlock v-else :name="userName" rounded/>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ userName }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in sidebarItems"
        :key="item.title"
        @click="item.handler"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import AvatarBlock from "@/components/Avatar/AvatarBlock";
export default {
  name: "ChatSidebar",
  components: {AvatarBlock},
  props: {
    value: Boolean,
    userName: {
      type: String,
      default: ''
    },
    userAvatar: {
      type: String,
      default: ''
    }
  },
  data(){
      return {
        sidebarItems: [
          {title: 'Contacts', icon: 'mdi-account-multiple', handler: () => this.openContacts()}
        ]
      }
  },
  computed: {
    openSidebar: {
      set(val) {
        this.$emit('input', val)
      },
      get() {
        return this.value
      }
    }
  },
  methods: {
    openContacts() {
      this.openSidebar = false
      this.$emit('openClientModal')
    }
  }
}
</script>

<style scoped>

</style>
