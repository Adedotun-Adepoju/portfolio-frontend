import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import api from "../api/portfolio";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    state: {
      projects: [],
      experiences: [],
    },
    getters: {
      projects(state) {
        return state.projects;
      },
      experiences(state) {
        return state.experiences;
      },
    },
    mutations: {
      FETCH_PROJECTS(state, data) {
        state.projects = data;
      },
      FETCH_EXPERIENCES(state, data) {
        state.experiences = data;
      },
    },
    actions: {
      async fetchProjects({ commit }) {
        try {
          const response = await api.fetchProjects();
          commit("FETCH_PROJECTS", response.data);
        } catch (error) {
          console.log(error);
        }
      },

      async fetchExperiences({ commit }) {
        try {
          const response = await api.fetchExperiences();
          commit("FETCH_EXPERIENCES", response.data);
        } catch (error) {
          console.log(error);
        }
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
