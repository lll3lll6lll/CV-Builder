import { createStore } from "vuex";
import { IWork } from "../types";

export interface State {
  resume: {
    works: IWork[];
  };
}

export default createStore<State>({
  state: { resume: { works: [] } },
  getters: {},
  mutations: {
    addWork(state, work: IWork) {
      state.resume.works.push(work);
    },
  },
  actions: {},
  modules: {},
});
