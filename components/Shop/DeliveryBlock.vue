<template>
  <div class="dates">
    <div v-if="dateDelivery">Доставка {{ calcDateToday(dateDelivery) }}</div>
    <div v-if="datePickup">Самовывоз {{ calcDateToday(datePickup) }}</div>
  </div>
</template>

<script>
import {calcDateToday} from "~/helpers/date/calcDateToday";

export default {
  name: "DeliveryBlock",
  props: {
    dateDelivery: {
      type: String,
      default: ''
    },
    datePickup: {
      type: String,
      default: ''
    },
  },
  methods: {
    calcDateToday(date){
      return calcDateToday(date)
    },
  }
}
</script>

<style scoped>
.dates{
  font-size: 14px;
}
</style>
