<template>
  <div class="cart">
    <v-badge
      overlap
      color="orange"
      :content="cart.length"
      :value="cart.length > 0 ? cart.length : false"
    >
      <v-icon>
        mdi-cart-outline
      </v-icon>
    </v-badge>
  </div>
</template>

<script>
export default {
  name: "CartBlock",
  props: {
    cart: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
.cart{
  cursor: pointer;
}
</style>
