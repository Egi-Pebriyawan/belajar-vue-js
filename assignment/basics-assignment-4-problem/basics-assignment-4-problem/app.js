const app = Vue.createApp({
  //
  data: function () {
    return {
      // isi data disini
      className: "",
      onoff: "",
      saklar: "",
      classBackground: "",
    };
  },

  methods: {
    toggleSaklar() {
      // Function toggle, isi hidden atau visible
      if (this.saklar === "hidden") {
        this.saklar = "visible";
        this.onoff = "hilangkan";
      } else {
        this.saklar = "hidden";
        this.onoff = "munculkan";
      }
    },
  },

  computed: {
    // Define your computed property as a function
  },

  watch: {},
});

app.mount("#assignment");
