import { createStore } from "vuex";
import { IWork, IWorksData } from "../types";
import {
  Resume,
  ResumeContacts,
  ResumeData,
  ResumeSettings,
} from "@/types/Resume";
import { User } from "@/types/Account";

export interface State {
  user: User | null;
  openResume: Resume | null;
  resumes: Resume[];
  works: IWorksData;
}

export default createStore<State>({
  state: {
    user: null,
    openResume: null,
    resumes: [],
    works: { works: [], title: "Work Experience" },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
    getOpenResume: (state) => state.openResume,
    getResumes: (state) => state.resumes,
    getResumeById:
      (state) =>
      (id: string): Resume | undefined => {
        return state.resumes.find((resume) => resume.id === id);
      },
  },
  mutations: {
    addWork(state, work: IWork) {
      state.works.works.push(work);
    },
    setUser(state, user: User) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    setOpenResume(state, resume: Resume) {
      state.openResume = resume;
    },
    clearOpenResume(state, resume: Resume) {
      state.openResume = null;
    },
    updateOpenResumeData(state: State, val: Partial<ResumeData>) {
      if (state.openResume) {
        Object.assign(state.openResume.data, val);
      } else {
        state.openResume = { data: { ...val } } as Resume;
      }
    },
    updateOpenResumeSettings(state: State, val: Partial<ResumeSettings>) {
      if (state.openResume) {
        Object.assign(state.openResume.settings, val);
      } else {
        state.openResume = { settings: { ...val } } as Resume;
      }
    },
    updateOpenResumeContacts(state: State, val: Partial<ResumeContacts>) {
      if (state.openResume) {
        Object.assign(state.openResume.contacts, val);
      } else {
        state.openResume = { contacts: { ...val } } as Resume;
      }
    },
    setResumes(state, resumes: Resume[]) {
      state.resumes = resumes;
    },
    addResume(state, resume: Resume) {
      state.resumes.push(resume);
    },
    removeResume(state, resumeId: string) {
      state.resumes = state.resumes.filter((resume) => resume.id !== resumeId);
    },
  },
  actions: {},
  modules: {},
});
