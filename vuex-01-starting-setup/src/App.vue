<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>

    <favourite-value></favourite-value>

    <change-counter></change-counter>

    <button @click="inc">Add 1</button>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapActions } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  methods: {
    ...mapActions('numbers', {
      inc: 'increment',
    }),
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
