<template>
  <div class="search" :style="{maxWidth: fullWidth ? '100%' : maxWidthProp + 'px'}">
    <v-icon color="#535252">
      mdi-magnify
    </v-icon>
    <input
      :value="value"
      placeholder="Search"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      default: ''
    },
    maxWidthProp: {
      type: [Number, String],
      default: 350
    },
    fullWidth: Boolean,
  },
}
</script>

<style lang="scss">
.search {
  position: relative;
  background: #fff;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;

  .v-icon {
    position: absolute;
    top: 7px;
    left: 11px;
  }

  input {
    outline: none;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    padding-left: 40px;
    color: #535252;

    &::placeholder {
      color: #BABABA;
    }
  }
}
</style>
