const app = Vue.createApp({
  //
  data: function () {
    return {
      // isi data disini
      newTask: "",
      tasks: [],
      showList: true,
    };
  },

  methods: {
    // buat fungsi ketika tombol Add Task di klik
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },

    toggleList() {
      this.showList = !this.showList;
    },
  },

  computed: {
    // Define your computed property as a function
    listButtonLabel() {
      return this.showList ? "Hide List" : "Show List";
    },
  },

  watch: {},
});

app.mount("#assignment");
