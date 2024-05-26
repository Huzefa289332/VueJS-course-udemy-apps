import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },

  actions: {
    login(context) {
      console.log('login action');
      context.commit('login');
    },

    logout(context) {
      context.commit('logout');
    },
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
