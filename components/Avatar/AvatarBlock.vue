<template>
  <div class="avatar">
    <v-menu v-if="dropItems.length > 0" offset-y>
      <template #activator="{ on, attrs }">
        <v-avatar
          class="ava"
          color="main"
          :rounded="!rounded"
          :size="size"
          v-bind="attrs"
          v-on="on"
        >
          <img v-if="avatarImg" :src="avatarImg" alt="avatar">
          <span v-else class="white--text" :style="{fontSize: size / 2.5 + 'px'}">{{ name ? name[0].toUpperCase() : '' }}</span>
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
    <div v-else>
      <v-badge
        :class="{'badge-none': !icon}"
        bordered
        color="teal"
        :icon="icon"
        offset-x="20"
        offset-y="20"
        left
      >
        <v-avatar
          class="ava"
          color="main"
          :rounded="!rounded"
          :size="size"
        >
          <img v-if="avatarImg" :src="avatarImg" alt="avatar">
          <span v-else class="white--text" :style="{fontSize: size / 2.5 + 'px'}">{{ name ? name[0].toUpperCase() : '' }}</span>
        </v-avatar>
      </v-badge>
    </div>

  </div>
</template>

<script>
export default {
  name: "AvatarBlock",
  props: {
    avatarImg: {
      type: [String],
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    rounded: Boolean,
    name: {
      required: true
    },
    size: {
      type: [Number, String],
      default: 36
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
.avatar .ava.v-avatar{
  border: 2px solid orange !important;
}
.badge-none{
  .v-badge__badge{
    display: none;
  }
}
</style>
