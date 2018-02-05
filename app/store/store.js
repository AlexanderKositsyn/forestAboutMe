import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  //начальное состояние приложения(хранилища для приложения)
  state: {
    skills: [],
    typeSkills: {
      "1": "Frontend",
      "2": "Backend",
      "3": "Workflow"
    },
    sliderData: []
  },
  getters: {},
  mutations: {
    setSkillsBD(state, response) {
      state.skills = response;
    },
    setSliderData(state, response) {
      state.sliderData = response;
    }
  }
});
