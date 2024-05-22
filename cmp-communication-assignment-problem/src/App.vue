<template>
  <active-user :username="username" :age="age"></active-user>
  <user-data @on-user-added="addUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      age: ''
    }
  },
  methods: {
    addUser(user) {
      this.username = user.username;
      this.age = user.age;
    }
  }
}
</script>