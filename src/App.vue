<template>

  <div class="container">
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

    <form ref="myForm" @submit.prevent>
      <h2>Add new kitty</h2>
      <input
          v-bind:value="name"
          @input="name = $event.target.value"
          class="input" type="text" placeholder="Name">
      <input
          v-bind:value="avatar"
          @input="avatar = $event.target.value"
          class="input" type="text" placeholder="Photo's URL">
      <button
          @click="addNewUser" class="btn"
      >Submit</button>
    </form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        users: [
          {
            name: 'Oliver',
            avatar: 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: 'Simba',
            avatar: 'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          },
          {
            name: 'Loki',
            avatar: 'https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          },
        ],
        activeUser: 0,
        name: '',
        avatar: '',
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
      addNewUser() {
        const newUser = {
          name: this.name,
          avatar: this.avatar,
        }
        this.users.unshift(newUser)
        this.activeUser = 0
        this.name = ''
        this.avatar = ''
      },
    },
  }
</script>

<style>
.container {
  display: flex;
  padding: 40px;
  justify-content: space-around;
}
.slider {
  display: flex;
  flex-direction: column;
}
.slider__username {
  font-size: 32px;
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

.slider__nav {
  margin-top: 40px;
}

</style>