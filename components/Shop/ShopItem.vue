<template>
  <div class="shopItem">
    <div class="shopItem-img">
      <img :src="img" :alt="title">
    </div>
    <div class="shopItem-info">
      <div class="d-flex align-center">
        <v-rating
          :value="rate"
          readonly
          color="orange"
          size="20"
        ></v-rating>
        <div>
          ( {{ String(reviewsLen) }} )
        </div>
      </div>
      <h4 class="mb-4 mt-1 shopItem-title">{{ title }}</h4>
      <div>
        <div v-for="item in miniInfo" :key="item.title" class="fz14 mb-1">
          <span>{{ item.title }}</span>
          <b v-if="item.text">{{ item.text }}</b>
          <b v-else>{{ item.status ? 'Есть' : 'Нет' }}</b>
        </div>
      </div>
    </div>

    <div class="shopItem-right">
      <PriceBlock
        :price="price"
        :old-price="oldPrice"
        class="mb-4"
      />
      <DeliveryBlock
        :date-delivery="dateDelivery"
        :date-pickup="datePickup"
      />
      <InStock class="mt-4"/>
    </div>
  </div>
</template>

<script>
import PriceBlock from "~/components/Shop/Price";
import DeliveryBlock from "~/components/Shop/DeliveryBlock";
import InStock from "~/components/Shop/InStock";


export default {
  name: "ShopItem",
  components: {InStock, DeliveryBlock, PriceBlock},
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      default: 0
    },
    reviewsLen: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: 0
    },
    inStock: Boolean,
    dateDelivery: {
      type: String,
      default: ''
    },
    datePickup: {
      type: String,
      default: ''
    },
    miniInfo: {
      type: Array,
      default: () => {
        return []
      }
    },
    tag: {
      type: String,
      default: ''
    }
  },

}
</script>

<style scoped lang="scss">
.shopItem {
  display: grid;
  align-items: center;
  grid-template-columns: 200px 1fr 300px;
  width: 100%;
  padding: 20px 30px;
  background: #fff;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  overflow: hidden;
  &-info{
    padding-left: 20px;
  }
  &-img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  &-title{
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: orange;
    width: fit-content;
    &:hover{
      text-decoration: none;
    }
  }
  &-right{
    padding-left: 50px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
