import { createStore } from "vuex";
import { IWork, IWorksData } from "../types";

export interface State {
  works: IWorksData;
}

export default createStore<State>({
  state: { works: { works: [], title: "Work Experience" } },
  getters: {},
  mutations: {
    addWork(state, work: IWork) {
      state.works.works.push(work);
    },
  },
  actions: {},
  modules: {},
});
