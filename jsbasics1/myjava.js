document.getElementById("demo").style.color = "red";
document.getElementById("demo").innerHTML = "Hello World!";

let change = document.getElementById("change");

change.addEventListener("click", function () {
  document.getElementById("demo").style.color = "cyan";
  document.getElementById("demo").innerHTML = "Hello World but cyan!";
});
let headertext = "this page contains very simple javascript codes!";
document.getElementById("text1").style.color = "blue";
document.getElementById("text1").innerHTML =
 headertext;
let changeh2 = document.getElementById("changeh2");
changeh2.addEventListener("click", function () {
  document.getElementById("text1").style.color = "green";
  document.getElementById("text1").innerHTML = headertext + "but it is green";
});
