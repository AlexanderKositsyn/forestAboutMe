import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //начальное состояние приложения(хранилища для приложения)
  state: {
    skills: [
      {
        id: 0,
        name: "HTML",
        percent: "50",
        type: "1"
      },
      {
        id: 1,
        name: "CSS",
        percent: "10",
        type: "1"
      },
      {
        id: 2,
        name: "PHP",
        percent: "20",
        type: "2"
      },
      {
        id: 3,
        name: "NODE",
        percent: "30",
        type: "2"
      },
      {
        id: 4,
        name: "webpack",
        percent: "50",
        type: "3"
      },
      {
        id: 5,
        name: "gulp",
        percent: "90",
        type: "3"
      }
    ],
    typeSkills: {
      "1": "Frontend",
      "2": "Backend",
      "3": "Workflow"
    }
  }
});
