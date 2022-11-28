<template>
  <form ref="myForm" @submit.prevent>
    <h2>Add new kitty</h2>
    <input
        v-model="newUser.name"
        class="input" type="text" placeholder="Name">
    <input
        v-model="newUser.avatar"
        class="input" type="text" placeholder="Photo's URL">
    <button
        @click="addNewUser" class="btn"
    >Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: '',
        avatar: '',
      },
      userCounter: 0
    }
  },
  methods: {
    addNewUser() {
      this.$emit('create', this.userCounter)
      this.userCounter = Date
      this.$store.commit('ADD_NEW_USER', {
        user: this.newUser
      })
    },
  },
}
</script>

<style scoped>
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  margin: 6px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
