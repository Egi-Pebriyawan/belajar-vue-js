const app = Vue.createApp({
  data: function () {
    return {
      myName: "Egi Pebriyawan",
      myAge: 25,
      randomImage: "https://picsum.photos/100/100",
    };
  },
  methods: {
    myAge5Years() {
      return this.myAge + 5;
    },
    favNumber() {
      return Math.floor(Math.random() * 11);
    },
  },
});

app.mount("#assignment");
