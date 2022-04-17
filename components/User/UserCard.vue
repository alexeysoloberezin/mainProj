<template>
  <div class="user">
    <div class="user-head">
      <AvatarBlock
        class="mr-4 user-ava"
        size="90"
        rounded
        :name="name"
        :avatar-img="avatarImg"
        :icon="getIcon(statusFriend)"
      />
      <div>
        <h4 class="user-name">{{ name }}</h4>
        <div class="user-info">
          <div>City: {{ city || '-' }}</div>
          <div>Age: {{ age || '-' }}</div>
          <div>Friends: {{ String(friends) || '-' }}</div>
        </div>
      </div>
    </div>
    <div class="mt-3 user-btns">
      <v-btn
        v-if="statusFriend === 1"
        color="teal"
        small
        outlined
        dark
        @click="removeFriend(id)"
      >
        Remove request
      </v-btn>
      <v-btn
        v-else-if="statusFriend === 2"
        color="teal"
        small
        outlined
        dark
        @click="removeFriend(id)"
      >
        Remove from friends
      </v-btn>
      <v-btn
        v-else
        color="teal"
        small
        dark
        @click="addFriend(id)"
      >
        Add as Friend
      </v-btn>
      <v-btn color="teal" outlined small dark @click="sendMessage(id)">
        Send message
      </v-btn>
    </div>
  </div>
</template>

<script>
import AvatarBlock from "@/components/Avatar/AvatarBlock";

export default {
  name: "UserCard",
  components: {AvatarBlock},
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    avatarImg: {
      type: String,
      default: ''
    },
    statusFriend: {
      type: [String, Number],
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'USER'
    },
    age: {
      type: [Number, String],
      default: 0
    },
    friends: {
      type: [Number, String],
      default: 0
    },
  },
  methods: {
    addFriend(id) {
      this.$store.dispatch('friends/addFriend', {id})
        .then(() => {
          this.$emit('getUsers')
        })
    },
    removeFriend(id) {
      this.$store.dispatch('friends/removeFriend', {id})
        .then(() => {
          this.$emit('getUsers')
        })
    },
    sendMessage(id){
      this.$store.commit('chat/activeUser', id)
      this.$router.push('/messages')
    },
    getIcon(status){
      switch (status) {
        case 1:
          return 'mdi-resistor'
        case 2:
          return 'mdi-emoticon-outline'
        default:
          return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  box-shadow: $shadow;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  border-bottom: 2px solid $main;
  transition: box-shadow .25s;

  &:hover {
    box-shadow: $shadowHover;
  }

  &-head {
    display: flex;
    align-items: center;
  }

  &-info {
    font-size: 13px;
  }

  &-ava {
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow .3s;

    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    }
  }

  &-name {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-decoration-color: orange;
    }
  }
}
</style>
