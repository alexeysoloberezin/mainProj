<template>
  <div class="search">
    <v-icon color="#535252">
      mdi-magnify
    </v-icon>
    <input :value="value"
           @input="$emit('input', $event.target.value)"
           placeholder="Search"
    >
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: ['value'],
}
</script>

<style lang="scss">
.search {
  position: relative;
  background: #fff;
  max-width: 350px;
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
