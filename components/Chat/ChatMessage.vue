<template>
  <div>
    <div v-if="event === 'message'" class="chat__message" :class="{'notIm': !fromI}">
      <div class="chat__message-text">
        {{ text }}
      </div>
      <time class="chat__message-date">
        {{ date }}
      </time>
    </div>
    <div v-else-if="event === 'connection'">
      {{ user }} is connected
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    text: {
      type: String,
      required: true
    },
    user: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    event: {
      type: String,
      default: ''
    },
    fromI: Boolean,
  }
}
</script>

<style scoped>

</style>
