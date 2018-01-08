/*---styles---*/
import "normalize.css";
import "../../sass/_core.scss";

/*---js---*/
import Vue from "vue";

/*---vue modules---*/
import app from "../../vue/admin.vue";

/*---vue store---*/
import store from "../../store/store";

//вызываем модуль vue для админки
let vm = new Vue({
  el: "admin",
  store,
  render: h => h(app)
});
