import { createStore } from "vuex";
import { IResume, IWork } from "../types";

export interface State {
  resume: IResume;
}

export default createStore<State>({
  state: {
    resume: { id: "first", works: { title: "Work Experience", works: [] } },
  },
  getters: {
    resume(state) {
      return state.resume;
    },
  },
  mutations: {
    addWork(state, work: IWork) {
      state.resume.works.works.push(work);
    },
  },
  actions: {},
  modules: {},
});
