<template>
  <div class="chat__user" :style="{border: noBorder ? 'initial' : ''}">
    <AvatarBlock :name="name" rounded class="mr-2"/>
    <div>
      <h4 class="chat__user-title">{{ title }}</h4>
      <div class="chat__user-text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import AvatarBlock from "@/components/Avatar/AvatarBlock";
export default {
  name: "ChatUser",
  components: {AvatarBlock},
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    noBorder: Boolean,
  }
}
</script>

<style >

</style>
