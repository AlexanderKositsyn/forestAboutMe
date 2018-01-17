export default function() {
  // let form = document.querySelector("#authorization__form");
  // function validateHandler(e) {
  //   e.preventDefault();
  //   let dataFormDataObject = new FormData(form),
  //     dataFormArray = [...dataFormDataObject.entries()],
  //     tooltip = document.querySelector(".authorization__tooltip");
  //   // сначала скоем тултип
  //   tooltip.classList.remove("authorization__tooltip--active");
  //   console.log(dataFormArray[0][1]);
  //   // если данные пустые то напишем в тул тип и остановим функцию
  //   if (dataFormArray[0][1] === "" || dataFormArray[1][1] === "") {
  //     tooltip.classList.add("authorization__tooltip--active");
  //     tooltip.innerHTML = "Вы забыли заполнить поле логин или пароль";
  //     return;
  //   }
  //   // если все окей, то отправляем эти данные на сревер при помощи ajax
  //   let serialize = function (obj) {
  //     var str = [];
  //     for (var p in obj)
  //       if (obj.hasOwnProperty(p)) {
  //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //       }
  //     return str.join("&");
  //   }
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", "form.php", true);
  //   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   xhr.onload = function () {
  //     if (xhr.status === 200) {
  //       alert('User\'s name is ' + xhr.responseText);
  //     } else {
  //       alert('Request failed.  Returned status of ' + xhr.status);
  //     }
  //   };
  //   xhr.send(serialize(dataFormArray));
  // }
  // form.addEventListener("submit", validateHandler);
}
