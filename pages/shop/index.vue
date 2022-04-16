<template>
  <div>
    <h1>shop</h1>
    <div>
      <v-select
        solo
        :items="category"
      >
      </v-select>
      <v-select
        solo
        :items="category"
      >
      </v-select>
    </div>

    <div class="d-flex flex-wrap">
      <ShopItem
        v-for="item in shopList"
        :key="item.device_id"
        :title="item.title"
        :img="item.img"
        :rate="item.rate"
        :reviews-len="item.reviewsLen"
        :mini-info="item.miniInfo"
        :tag="item.tag"
        :price="item.price"
        :old-price="item.oldPrice"
        :in-stock="item.inStock"
        :date-delivery="item.dateDelivery"
        :date-pickup="item.datePickup"
        class="mb-3"
      />
    </div>
  </div>
</template>

<script>
import ShopItem from "~/components/Shop/ShopItem";

export default {
  name: "ShopIndex",
  components: {ShopItem},
  mounted() {
    this.$store.dispatch('shop/getShopList')
  },
  computed: {
    shopList() {
        return this.$store.state.shop.list
    },
    category(){
      return this.$store.state.shop.category
    }
  },
}
</script>

<style scoped>

</style>
