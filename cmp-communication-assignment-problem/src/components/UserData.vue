<template>
  <form @submit.prevent="submitForm">
    <label for="username">Username</label>
    <input v-model="username" type="text" id="username" name="username">
    <label for="age">Age</label>
    <input v-model="age" type="number" id="age" name="age">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      age: ''
    }
  },
  emits: ['on-user-added'],
  methods: {
    submitForm() {
      this.$emit('on-user-added', {
        username: this.username,
        age: this.age
      });
    }
  }
}

</script>