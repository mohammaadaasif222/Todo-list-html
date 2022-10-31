const x = document.querySelector("input");
let form = document.querySelector("form");
const uList = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let btnCompelete = document.createElement("button");
  let btnDelete = document.createElement("button");
  let el = document.createElement("li");
  el.innerHTML = `<h3>${x.value}</h3>`;
  uList.appendChild(el);
  btnCompelete.innerText = "Complete";
  btnDelete.innerText = "Delete";
btnCompelete.setAttribute('class',"complete-btn btn btn-warning");
btnDelete.setAttribute('class',"trash-btn btn btn-danger");

  btnCompelete.addEventListener("click", function (e) {
    if (!el.classList.contains("complete")) {
      el.classList.add("complete");
    } else {
      el.classList.remove("complete");
    }
  });
  btnDelete.addEventListener("click", function (e) {
    el.style.display = "none";
    btnCompelete.style.display = "none";
    btnDelete.style.display = "none";
  });
  uList.appendChild(btnCompelete);
  uList.appendChild(btnDelete);
  x.value =' ';
});
