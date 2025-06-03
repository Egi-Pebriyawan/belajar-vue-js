const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },

    submitForm() {
      alert("Berhasil Di submit");
    },

    // Menambahkan prevent.default mencegah kembali ke data default istilahnya.
    // Tapi bisa langsung pakai .prevent di direktif nya di htmlnnya pakai vue
    submitForm2(event) {
      event.preventDefault();
      alert("Submitted");
    },

    setName(event, lastname) {
      this.name = event.target.value;
    },

    addCounter(number) {
      this.counter = this.counter + number;
    },
    reduceCounter(number) {
      this.counter = this.counter - number;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
