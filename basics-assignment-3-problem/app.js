Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much!';
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  methods: {
    addOne() {
      this.counter++;
    },
    addFive() {
      this.counter += 5;
    },
  },
}).mount('#assignment');
