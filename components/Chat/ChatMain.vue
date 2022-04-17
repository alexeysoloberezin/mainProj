<template>
  <div class="chat" style="--minHeight: 650px">
    <ChatSidebar
      v-model="openSidebar"
      :user-name="userName || ''"
      :user-avatar="user.avatar || ''"
      @openClientModal="openClientModal"
    />
    <ClientModal v-model="clientModal"/>

    <div class="chat__header">
      <v-app-bar-nav-icon @click.stop="openSidebar = true"></v-app-bar-nav-icon>
      <SearchInput max-width-prop="320"/>
    </div>
    <div class="chat__wrapper">
      <div class="chat__rooms">
        <ChatUser
          v-for="userItem in usersList"
          :key="userItem.id"
          :name="userItem.name || ''"
          :title="userItem.name || ''"
          class="px-3 hoverBg"
          @click.native="goInRoom(userItem)"
        />
      </div>
      <div class="chat__main">
        <template v-if="connect">
          <div v-if="activeUser" class="chat__main-head px-3">
            <ChatUser
              :name="activeUser.name || activeUser.email"
              :text="activeUser.name || activeUser.email"
              class="py-1 ma-0"
              no-border
              @click.native="$router.push('users/' + activeUser.id)"
            />
          </div>
          <div class="chat__chat">
            <ChatMessage
              v-for="message in messages"
              :key="message.id"
              :text="message.message"
              event="message"
              :date="message.createdAt"
            />
          </div>
          <div class="chat__main-textArea">
            <input
              v-model.trim="chatInput"
              type="text"
              class="search grow"
              @keyup.enter="submit()"
            >
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/Search/SearchInput";
import ChatSidebar from "@/components/Cart/ChatSidebar";
import ClientModal from "@/components/Modals/ClientModal";
import ChatUser from "@/components/Chat/ChatUser";
import ChatMessage from "@/components/Chat/ChatMessage";

export default {
  name: "ChatMain",
  components: {ChatMessage, ChatUser, ClientModal, ChatSidebar, SearchInput},
  data() {
    return {
      activeUser: null,
      roomId: '',
      connect: false,
      openSidebar: false,
      clientModal: false,
      chatInput: '',
      messages: [],
      usersList: [],
    }
  },
  mounted() {
    if (this.$store.state.chat.activeUser) {
      this.setPositionChatBottom()
      this.getUserInfo(this.$store.state.chat.activeUser)
    }

    this.$store.dispatch('user/getInfo')
    this.getUsers()
  },
  watch: {
    users() {
      this.setChatUsers(this.users)
    }
  },

  sockets: {
    disconnect() {
      this.connect = false;
    },

    setChatUsers(chatUsers) {
      this.usersList = chatUsers
    },

    roomUsers(users) {
      console.log(users)
    },

    notification(data) {
      console.log(data)
    },
    // Fired when the server sends something on the "messageChannel" channel.
    message(message) {
      this.messages.push(message)
      setTimeout(() => {
        this.setPositionChatBottom('slow')
      }, 50)
    },
  },
  computed: {
    userName() {
      return this.$store.getters['user/userName']
    },
    user() {
      return this.$store.state.user.user
    },
    users() {
      return this.$store.state.user.users
    },
    friends() {
      return this.$store.state.friends.friends || []
    },
  },
  methods: {
    setPositionChatBottom(type){
      const chatDOM = document.querySelector('.chat__chat')
      if (!chatDOM) return
      if (type === 'slow') return chatDOM.scrollTo({top: chatDOM.scrollHeight,  behavior: "smooth"})
      chatDOM.scrollTop = chatDOM.scrollHeight
    },
    setChatUsers(chatUsersArg) {
      const chatUsers = chatUsersArg.map(item => {
        return {
          ...item,
          room: this.user.id + "-" + item.id
        }
      })

      this.$socket.emit('setChatUsers', {chatUsers})
    },
    getMessages(room) {
      this.$store.dispatch('chat/getMessages', {room})
        .then((messages) => {
          this.messages = messages
        }).finally(() => {
        this.setPositionChatBottom()
      })
    },
    addMessage(message, room, userId) {
      return this.$store.dispatch('chat/addMessage', {
        message, room, userId,
      }).then((res) => {
        return Promise.resolve(res)
      }).catch(() => {
        return Promise.reject(new Error('Add message error'))
      })
    },
    getUserInfo(id) {
      this.$store.dispatch('user/getInfo', {id})
        .then(() => {
          this.activeUser = this.$store.state.user.otherUser
          this.goInRoom(this.activeUser)
          this.connect = true
        })
    },
    goInRoom(user) {
      this.connect = true
      this.messages = []
      this.getMessages(this.user.id + "-" + user.id)

      // room id generated ( myuserID - myfriendID )
      this.$socket.emit('joinRoom', {
        userName: this.user.name || this.user.email,
        userId: this.user.id,
        room: this.user.id + "-" + user.id
      })
      this.activeUser = user
    },
    getUsers() {
      this.$store.dispatch('user/getUsers')
    },
    submit() {
      if (!this.chatInput) return this.$toast('Input is empty')

      const data = {
        message: this.chatInput,
        room: this.user.id + "-" + this.activeUser.id,
        userId: this.user.id,
      }

      this.addMessage(data).then((message) => {
        this.$socket.emit('message', message)
        this.chatInput = ''
      })
    },
    openClientModal() {
      this.clientModal = true
    }
  }
}
</script>

<style lang="scss">
.chat {
  position: relative;
  width: 100%;
  background: #fff;
  box-shadow: $shadow;
  overflow: hidden;
  border-radius: 10px;
  min-height: var(--minHeight);

  &__header {
    height: 50px;
    display: flex;
    align-items: center;
    background: rgba($bg2, 1);
    padding: 0 15px;
    border-bottom: 1px solid $borderColor;
  }

  &__wrapper {
    display: flex;
  }

  &__main {
    position: relative;
    height: var(--minHeight);
    background: rgb(255 231 199 / 50%);
    width: 65%;

    &-head, &-textArea {
      position: absolute;
      z-index: 3;
      width: 100%;
      background: $bg3;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.02);
    }

    &-head {
      top: 0;
      border-bottom: 1px solid $borderColor;
    }

    &-textArea {
      bottom: 0;
      height: 60px;
      padding: 10px;
      border-top: 1px solid $borderColor;

      .search {
        background: #fff;
        padding-left: 20px;
        height: 100% !important;
        min-height: 100%;
        resize: none;
        font-size: 13px;
      }
    }
  }

  &__chat {
    height: calc(var(--minHeight));
    padding: 70px 20px 70px 20px;
    overflow-y: auto;
  }

  &__message {
    width: fit-content;
    font-size: 14px;
    margin-bottom: 12px;
    &-text {
      background: rgba($main, .4);
      padding: 4px 15px;
      width: fit-content;
      border-radius: 8px;
    }

    time {
      font-size: 12px;
      opacity: 0.5;
    }

    &.notIm {
      margin-left: auto;
      time {
        display: flex;
        justify-content: flex-end;
      }
      .chat__message-text{
        margin-left: auto;
      }
    }
  }

  &__user {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid $borderColor;
    padding: 10px 0;
    border-radius: 10px;
    transition: .2s;

    &.hoverBg:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    &-text, &-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-text {
      width: 100%;
      font-size: 14px;
    }
  }

  &__rooms {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    min-height: var(--minHeight);
    border-right: 1px solid $borderColor;
    background: rgba($bg2, .75);
  }
}
</style>
