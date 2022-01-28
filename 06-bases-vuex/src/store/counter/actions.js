import getRandomInt from "../../helpers/getRandomInt";

const actions = {
  async incrementRandomInt(context) {
    context.commit("setLoading", true);
    const randomInt = await getRandomInt();
    context.commit("incrementBy", randomInt);
    context.commit("setLoading", false);
  },
};

export default actions;
