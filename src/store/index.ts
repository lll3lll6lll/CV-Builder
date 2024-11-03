import { createStore } from "vuex";
import { IResume, IWork } from "../types";

export interface State {
  resumeList: IResume[];
}

export default createStore<State>({
  state: {
    resumeList: [
      { id: "first", works: { title: "Work Experience", works: [] } },
    ],
  },
  getters: {
    resumeAll(state) {
      return state.resumeList;
    },
    resume: (state) => (id: string) => {
      return state.resumeList.find((v) => v.id === id);
    },
  },
  mutations: {
    // addWork(state, work: IWork) {
    //   state.resume.works.works.push(work);
    // },
    addResume(state, resume: IResume) {
      resume.id = `resume${state.resumeList.length + 1}`;
      state.resumeList.push(resume);
    },
    removeResume(state, id: string) {
      const index = state.resumeList.findIndex((v) => v.id === id);
      state.resumeList.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
