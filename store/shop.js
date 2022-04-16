export const state = () => ({
  category: [
    'Телефоны',
    'Телевизор',
    'Машина',
    'Телефоны',
  ],
  filters: [

  ],
  list: [
    {
      id: '',
      device_id: '',
      title: 'Медиа стримеры и плееры Xiaomi Mi Box S',
      rate: 4,
      img: 'https://cdn.rbt.ru/images/gen/item_image/image/7119/22/711890_r3038.jpg',
      reviewsLen: '2191',
      price: 6790,
      oldPrice: 5990,
      inStock: true,
      dateDelivery: '2022-04-12 16:38:46.07+03',
      datePickup: '2022-04-16 00:38:46.07+03',
      miniInfo: [
        {
          title: 'Количество выходов HDMI',
          text: '1 шт',
        },
        {
          title: 'Wi-F',
          text: '',
          status: true,
        },
        {
          title: 'Поддержка DLNA',
          text: '',
          status: true,
        },
        {
          title: 'Bluetooth',
          text: '',
          status: true,
        },
      ],
      tag: ''
    },
    {
      id: '',
      device_id: '',
      title: 'Медиа стримеры и плееры Xiaomi Mi Box S',
      rate: 4,
      img: 'https://cdn.rbt.ru/images/gen/item_image/image/7119/22/711890_r3038.jpg',
      reviewsLen: '2191',
      price: 6790,
      oldPrice: 5990,
      inStock: true,
      dateDelivery: '',
      datePickup: '',
      miniInfo: [
        {
          title: 'Количество выходов HDMI',
          text: '1 шт',
        },
        {
          title: 'Wi-F',
          text: '',
          status: true,
        },
        {
          title: 'Поддержка DLNA',
          text: '',
          status: true,
        },
        {
          title: 'Bluetooth',
          text: '',
          status: true,
        },
      ],
      tag: ''
    },
    {
      id: '',
      device_id: '',
      title: 'Медиа стримеры и плееры Xiaomi Mi Box S',
      rate: 4,
      img: 'https://cdn.rbt.ru/images/gen/item_image/image/7119/22/711890_r3038.jpg',
      reviewsLen: '2191',
      price: 6790,
      oldPrice: 5990,
      inStock: true,
      dateDelivery: '2022-04-16 16:38:46.07+03',
      datePickup: '2022-04-15 16:38:46.07+03',
      miniInfo: [
        {
          title: 'Количество выходов HDMI',
          text: '1 шт',
        },
        {
          title: 'Wi-F',
          text: '',
          status: true,
        },
        {
          title: 'Поддержка DLNA',
          text: '',
          status: true,
        },
        {
          title: 'Bluetooth',
          text: '',
          status: true,
        },
      ],
      tag: ''
    },
  ]
})

export const mutations = {
  list(state, val) {
    state.list = val;
  },
}

export const actions = {
  getShopList({commit}) {
    this.$axios.get('/device/all')
      .then((res) => {
        console.log('res',res)
        // commit('list', res.data.rows)
      }).catch(() => {
      this.$toast.error('The request failed')
    })
  },
}
