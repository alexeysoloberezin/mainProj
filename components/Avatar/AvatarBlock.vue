<template>
  <div class="avatar">
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-avatar
          color="main"
          rounded
          size="36"
          v-bind="attrs"
          v-on="on"
        >
          <img v-if="avatarImg" :src="avatarImg" alt="avatar">
          <span v-else class="white--text">{{ name[0].toUpperCase() }}</span>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="item in dropItems"
          :key="item.route"
        >
          <v-list-item-title>
            <nuxt-link :to="item.route">
              {{ item.name }}
            </nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "AvatarBlock",
  props: {
    avatarImg: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    dropItems: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">

</style>
