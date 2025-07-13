const app = Vue.createApp({
  data: function () {
    return {
      userinput: "",
      userinput2: "",
    };
  },
  methods: {
    clickalert() {
      alert("this is alert!");
    },
    handleinput(event) {
      this.userinput = event.target.value;
    },
    handleinput2(event) {
      this.userinput2 = this.userinput;
    },
  },
});

app.mount("#assignment");
