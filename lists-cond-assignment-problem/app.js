Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      isShow: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
    toggleList() {
      this.isShow = !this.isShow;
    },
  },
}).mount('#assignment');
