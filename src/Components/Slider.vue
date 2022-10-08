<template>
  <div class="slider">
    <p class="slider__username"> {{ selectUser.name }} </p>
    <img
        :src="selectUser.avatar"
        class="slider__avatar" alt="">
    <div class="slider__nav">
      <button
          @click="previousUser"
          class="slider__back" >na zad</button>
      <button
          @click="nextUser"
          class="slider__next" >vpe red</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userCounter: {
      required: true,
      type: Number
    },
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeUser: 0,
    }
  },
  watch: {
    userCounter(newValue, oldValue) {
      this.activeUser = 0
    }
  },
  computed: {
    selectUser() {
      return this.users.find((user, index) => {
        return index === this.activeUser
      })
    },
  },
  methods: {
    nextUser() {
      if (this.activeUser !== (this.users.length - 1)) {
        this.activeUser += 1
      }
    },
    previousUser() {
      if (this.activeUser !== 0) {
        this.activeUser -= 1
      }
    },
  }
}
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: column;
}
.slider__username {
  font-size: 32px;
}
.slider__nav {
  margin-top: 40px;
}
.slider__nav {
  margin-top: 40px;
}
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