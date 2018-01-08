/*---styles---*/
import "normalize.css";
import "../../sass/_core.scss";

/*---js---*/
import Vue from "vue";

/*---js modules---*/
import app from "../../vue/admin.vue";

//вызываем модуль vue для админки
let vm = new Vue({
  el: "admin",
  render: h => h(app)
});
