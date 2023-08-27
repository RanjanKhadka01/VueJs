import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  actions: {
    increaseCounter() {
      this.count++;
    },
    decreaseCounter() {
      this.count--;
    },
  },
  getters: {
    oddOreven: (state) => {
      if (state.count % 2 === 0) return "Even";
      return "Odd";
    },
  },
});
