<template>
  <div v-click-outside="clickOut" class="notification-header ">
    <div class="notification-list" :class="{'show': showNotification}">
      <h3>Notifications</h3>
      <template v-if="notifications.length > 0">
        <NotificationItem
          v-for="item in notifications"
          :id="item.id"
          :key="item.id"
          :text="item.text"
        />
      </template>
      <p v-else class="text-center pt-3">List is empty</p>

    </div>
    <div style="cursor: pointer" @click="showNotification = !showNotification">
      <v-badge
        overlap
        color="orange"
        :content="notifications.length"
        :value="notifications.length > 0 ? notifications.length : false"
      >
        <v-icon>
          mdi-bell-outline
        </v-icon>
      </v-badge>
    </div>
  </div>
</template>

<script>
import NotificationItem from "@/components/Notification/NotificationsItem";

export default {
  name: "NotificationComponent",
  components: {NotificationItem},
  computed: {
    showNotification: {
      set(val) {
        this.$store.commit('global/showNotification', val)
      },
      get() {
        return this.$store.state.global.showNotification
      }
    },
    notifications: {
      set(val) {
        this.$store.commit('global/notifications', val)
      },
      get() {
        return this.$store.state.global.notifications
      }
    }
  },
  methods: {
    clickOut() {
      this.showNotification = false
    }
  }
}
</script>

<style scoped lang="scss">
.notification-header {
  position: relative;
  z-index: 400;
}

.notification-list {
  position: absolute;
  top: 35px;
  right: 0;
  overflow-y: auto;
  max-height: calc(100vh - 35px);
  background: #fff;
  box-shadow: 0 2px 7px rgba(2, 9, 24, 0.14);
  border-radius: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;
  transform: scale(0.75);
  transform-origin: top right;
  opacity: 0;
  visibility: hidden;
  transition: .35s;

  h3 {
    padding: 12px 20px 8px;
    font-weight: 500;
    border-bottom: 1px solid #eeeeee;
  }

  &.show {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
}
</style>
