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
          name="alex"
          title="123123"
          text="123123123123"
        />
      </div>
      <div class="chat__main">
        <template v-if="connect">
          <div class="chat__main-head px-3">
            <ChatUser name="Alex" text="Alex" class="py-1 ma-0" no-border/>
          </div>
          <div class="chat__chat">
            <ChatMessage
              v-for="message in messages"
              :key="message.id"
              :text="message.message"
              :date="message.date"
              :event="message.event"
              :user="message.username"
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
import {v4 as uuidv4} from 'uuid'
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
      connect: false,
      socket: null,
      openSidebar: false,
      clientModal: false,
      chatInput: '',
      messages: []
    }
  },
  created() {
    this.$store.dispatch('user/getInfo')

    this.socket = new WebSocket('ws://localhost:5555')

    this.socket.onopen = () => {
      this.connect = true
      const message = {
        event: 'connection',
        username: 'Alex',
        message: 'test',
        id: uuidv4
      }
      this.socket.send(JSON.stringify(message))
    }
    this.socket.onmessage = (event) => {
      console.log('even', event)
      const message = JSON.parse(event.data)
      this.messages.push(message)
    }
    this.socket.onclose = () => {
      this.connect = false
      console.log('socket is close ')
    }
    this.socket.onerror = () => {
      this.$toast.error('Chat connect Error')
    }
  },
  computed: {
    userName() {
        return this.$store.getters['user/userName']
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    submit() {
      const message = {
        event: 'message',
        username: 'Alex',
        message: this.chatInput,
        id: uuidv4
      }
      this.socket.send(JSON.stringify(message))
      this.chatInput = ''
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
    height: var(--minHeight);
    overflow-y: auto;
    background: rgb(255 231 199 / 50%);
    width: 65%;

    &-head, &-textArea {
      position: sticky;
      z-index: 3;
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
    height: calc(var(--minHeight) - 110px);
    padding: 20px;
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
    }
  }

  &__user {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid $borderColor;
    padding-bottom: 10px;
    margin-bottom: 10px;

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
