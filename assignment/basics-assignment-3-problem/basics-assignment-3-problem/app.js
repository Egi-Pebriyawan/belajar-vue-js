const app = Vue.createApp({
  data: function () {
    return {
      // isi data disini
      resultbutton: 0,
      timer: null,
    };
  },

  methods: {
    addcounter5(number) {
      this.resultbutton = this.resultbutton + number;
    },
    addcounter1(number) {
      this.resultbutton = this.resultbutton + number;
    },
  },

  computed: {
    // Define your computed property as a function

    messageBasedOnResult() {
      // Access the data property using 'this'
      if (this.resultbutton < 37) {
        return "Not there yet to 37"; // Return the string message
      } else if (this.resultbutton === 37) {
        return "You are here now"; // Return the string message
      } else {
        return "It's too much"; // Return the string message
      }
    },
  },

  watch: {
    resultbutton(currentValue) {
      // Only using 'currentValue' (or just 'value' as you suggested)
      console.log(`resultbutton is now: ${currentValue}`);

      // Clear any previous timer to prevent multiple resets
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
        console.log("Previous reset timer cleared.");
      }

      // If the current value is more than 0, set a timer to reset it
      if (currentValue > 0) {
        console.warn("Value more than zero! Setting timer to reset...");
        this.timer = setTimeout(() => {
          this.resultbutton = 0; // Reset to 0
          console.log("resultbutton reset to 0 (because it was more 0).");
          this.timer = null; // Clear timer ID after it fires
        }, 5000); // 5000 milliseconds = 5 seconds
      }
    },
  },
});

app.mount("#assignment");
