<template>
  <div class="sidebar">
    <div v-for="item in items" :key="item.route" class="sidebar__item">
      <nuxt-link :to="item.route" class="sidebar__item-link">
        <v-icon color="black">
          {{ item.icon }}
        </v-icon>
        <div class="sidebar__item-name">
          {{ item.name }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarBlock",
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  padding-top: 40px;
  top: $headerHeight;
  left: 30px;
  width: 300px;

  &__item {
    &-link {
      display: flex;
      align-items: center;
      padding: 12px 0;
      color: $textBlack;
      opacity: 0.5;
      transition: .2s;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      &:hover {
        opacity: 0.8;
      }
    }

    &-name {
      font-weight: 500;
      margin-left: 10px;
    }
  }
}
</style>
