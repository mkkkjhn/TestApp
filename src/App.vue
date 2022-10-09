<template>

  <div class="container">
    <slider></slider>
    <add-users-form></add-users-form>
  </div>

</template>

<script>
import Slider from "@/Components/Slider";
import AddUsersForm from "@/Components/AddUsersForm";
  export default {
    components: {
      Slider, AddUsersForm
    },
  }
</script>

<style>
.container {
  display: flex;
  padding: 40px;
  justify-content: space-around;
}
</style>