const mutations = {
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
};

export default mutations;
