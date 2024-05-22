Vue.createApp({
  data() {
    return {
      input: '',
      confirmedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Hello World!');
    },
    saveInput(event) {
      this.input = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.input;
    },
  },
}).mount('#assignment');
