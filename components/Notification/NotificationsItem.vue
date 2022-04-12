<template>
  <div class="notification">
    <div @click="clickItem()">
      <div style="display: flex; align-items: center; cursor: pointer" >
      </div>
      <p>{{ text }}</p>
    </div>
    <div class="cls" @click="deleteItem()">
      <v-icon  size="18" >
        mdi-window-close
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",
  props: {
    text: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
  },
  methods: {
    clickItem() {
      this.deleteItem()
      this.$emit('clickItem')
    },
    deleteItem() {
      // const bodyFormData = new FormData();
      // this.$store.commit('tasks/taskType', this.status)
      // bodyFormData.append('id', this.id)
      //
      // this.$axios({
      //   method: "post",
      //   url: '/task/del_notf/',
      //   data: bodyFormData,
      //   headers: {"Content-Type": "multipart/form-data"},
      // }).then((res) => {
      //   if (res.data.status) {
      //     setTimeout(() => {
      //       this.$emit('deleteSuccess', this.id)
      //     }, 300)
      //   }else{
      //     this.$toast.error('Delete error')
      //   }
      // }).catch(() => {
      //   this.$toast.error('Delete error')
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.notification{
  cursor: pointer;
  position: relative;
  padding: 11px 20px;
  border-bottom: 1px solid #f7f7f7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  * {
    white-space: initial;
    text-align: left;
    text-transform: initial;
    color: #000;
  }
  h3 {
    font-weight: 500;
    font-size: 18px !important;
  }
  p {
    font-size: 15px !important;
    font-weight: 400;
    margin-bottom: 0;
  }
  .cls{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    right: 15px;
    transition: .3s;
    &:hover{
      opacity: 1;
    }
  }
  &:hover{
    text-decoration: underline;
    background: rgba(23, 43, 77, 0.05);
  }
}
</style>
