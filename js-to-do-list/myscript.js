var liste = document.querySelector("ul");
var urun = document.querySelector("#data");
var add = document.querySelector("#add");

add.addEventListener("click", function () {
  // createElement ile yeni bir listItem (li) oluştur
  var li = document.createElement("li");
  // Input ile gelen datayi "li" içerisine metin olarak gir
  li.textContent = data.value;

  // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekle
  liste.appendChild(li);

  const input = document.createElement("input");
  input.type = "checkbox";
  li.append(input);

 
  // data inputu içerisindeki metni sil
  data.value = "";
});
