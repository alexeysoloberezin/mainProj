<template>
  <v-dialog
    v-model="openClientModal"
    max-width="500"
  >
    <div class="clientModal">
      <v-card-title>Contacts</v-card-title>
      <v-divider></v-divider>
      <div class="clientModal-list">
        <SearchInput v-model="search" class="mb-3" full-width/>
        <div v-if="friends">
          <div
            v-for="friend in friends"
            :key="friend.user.id"
          >
            <ChatUser
              :name="friend.user.name || friend.user.email"
              :title="friend.user.name || friend.user.email"
              text=""
            />
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="pa-4">
        <v-btn
          color="main"
          dark
          small
          @click="$router.push('/users')"
        >
          All Users
        </v-btn>
        <v-btn
          class="ml-auto"
          color="orange"
          text
          small
          @click="openClientModal = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </div>
  </v-dialog>
</template>

<script>
import SearchInput from "@/components/Search/SearchInput";
import ChatUser from "@/components/Chat/ChatUser";

export default {
  name: "ClientModal",
  components: {ChatUser, SearchInput},
  props: {
    value: Boolean,
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    friends() {
      return this.$store.state.friends.friends.filter(friend => {
        if (friend.user.name){
          return friend.user.name.toLowerCase().includes(this.search.toLowerCase())
        }else if (friend.user.email){
          return friend.user.email.toLowerCase().includes(this.search.toLowerCase())
        }
        return false
      }) || []
    },
    openClientModal: {
      set(val) {
        this.$emit('input', val)
      },
      get() {
        return this.value
      }
    }
  },
  mounted() {
    this.$store.dispatch('friends/getFriends')
  }
}
</script>

<style scoped lang="scss">
.clientModal {
  background: $bg2;

  &-list {
    overflow-y: auto;
    height: 400px;
    padding: 20px;
  }
}
</style>
