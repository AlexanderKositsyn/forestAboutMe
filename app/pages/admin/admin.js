/*---styles---*/
import "normalize.css";
import "../../sass/_core.scss";

/*---js---*/
import Vue from "vue";

/*---vue components---*/

import admin from "../../vue/admin.vue";

/*---vue routes---*/
import router from "../../vue/routes/index";

/*---vue store---*/
import store from "../../store/store";

//вызываем модуль vue для админки
let vm = new Vue({
  el: "admin",
  router,
  store,
  render: h => h(admin)
});
