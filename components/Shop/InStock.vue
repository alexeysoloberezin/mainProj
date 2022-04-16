<template>
  <div class="d-flex align-center inStock">
    <v-checkbox
      v-model="cbx"
      readonly
      checked
      color="orange"
      style="pointer-events: none"
      hide-details
      class="ma-0 pa-0"
    ></v-checkbox>
    <i v-if="cbx">Товар в наличии</i>
    <i v-else>Товара нет в наличии</i>
  </div>
</template>

<script>
export default {
  name: "InStock",
  props: {
    inStock: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cbx: this.inStock
    }
  }
}
</script>

<style scoped>
</style>
