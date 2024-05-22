Vue.createApp({
  data() {
    return {
      user: '',
      isShow: true,
      bg: '',
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    userClasses() {
      const classObj = {
        user1: this.user === 'user1',
        user2: this.user === 'user2',
      };

      if (this.isShow) {
        classObj.visible = true;
      } else {
        classObj.hidden = true;
      }

      return classObj;
    },
  },
}).mount('#assignment');
