export default {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 3000);
  },

  increase(context, payload) {
    setTimeout(function () {
      context.commit('increase', payload);
    }, 3000);
  },
};
