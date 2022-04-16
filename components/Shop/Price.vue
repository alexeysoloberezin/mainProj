<template>
  <div class="price">
    <del
      v-if="oldPrice"
      :style="{
        fontSize: size * 0.75 + 'px',
        fontWeight: boldOldPrice ? '600' : ''
      }"
      class="oldPrice"
    >
      {{ oldPrice }}
    </del>
    <div
      :style="{
        fontSize: size + 'px',
      }"
    >
      <span :style="{ fontWeight: boldPrice ? '600' : ''}">{{ price }}</span> руб
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceBlock",
  props: {
    price: {
      type: Number,
      required: true
    },
    oldPrice: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 20
    },
    boldPrice: Boolean,
    boldOldPrice: Boolean,
  },
}
</script>

<style scoped>
.oldPrice{
  color: gray;
}
</style>
