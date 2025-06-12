const app = Vue.createApp({
  //
  data: function () {
    return {
      // isi data disini
      className: "",
      onoff: "",
      saklar: "",
    };
  },

  methods: {
    toggleSaklar() {
      // Function toggle, isi hidden atau visible
      if (this.saklar === "hidden") {
        this.saklar = "visible";
      } else {
        this.saklar = "hidden";
      }
    },
  },

  computed: {
    // Define your computed property as a function
  },

  watch: {},
});

app.mount("#assignment");
