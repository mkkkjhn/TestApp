<template>
  <form ref="myForm" @submit.prevent>
    <h2>Add new kitty</h2>
    <input
        v-bind:value="newUser.name"
        @input="newUser.name = $event.target.value"
        class="input" type="text" placeholder="Name">
    <input
        v-bind:value="newUser.avatar"
        @input="newUser.avatar = $event.target.value"
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
    }
  },
  methods: {
    addNewUser() {
      this.$emit('create', this.newUser)
      this.newUser = {
        name: '',
        avatar: '',
      }
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