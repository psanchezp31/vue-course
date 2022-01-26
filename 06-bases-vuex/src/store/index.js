import { createStore } from "vuex";
import getRandomInt from "../helpers/getRandomInt";

export default createStore({
  state: {
    count: 1,
    lastMutation: "none",
    isLoading: false,
    lastRandomInt: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementBy " + val;
      state.lastRandomInt = val;
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
  },
  actions: {
    async incrementRandomInt(context) {
        context.commit("setLoading", true);
        const randomInt = await getRandomInt();
        context.commit("incrementBy", randomInt);
        context.commit("setLoading", false);
    },
  },
});
