<template>
  <div>
    <h1>Users</h1>
    <div v-if="users" class="users">
      <UserCard
        v-for="user in users"
        :id="user.id"
        :key="user.id"
        :status-friend="user.statusFriend || ''"
        :name="user.name || user.email"
        :friends="user.friendsLength || 0"
        :avatar-img="user.avatar || ''"
        :city="user.city || ''"
        :age="user.age || 0"
        @getUsers="getUsers"
      />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/User/UserCard";
export default {
  name: "UsersIndex",
  components: {UserCard},
  computed: {
    users() {
      return this.$store.state.user.users || []
    },
    friends() {
      return this.$store.state.friends.friends || []
    },
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers(){
      this.$store.dispatch('user/getUsers')
    },
  }
}
</script>

<style scoped lang="scss">
.users{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}

</style>
