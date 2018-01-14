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
      console.log(response);
      state.skills = response;
      console.log("new state");
      console.log(state.skills);
    },
    setSliderData(state, response) {
      console.log(response);
      state.sliderData = response;
      console.log("new state");
      console.log(state.sliderData);
    }
  }
});
