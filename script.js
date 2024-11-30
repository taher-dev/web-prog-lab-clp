const loadBtn = document.getElementById("loadBtn");
const dataList = document.getElementById("dataList");

loadBtn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  // api url: https://raw.githubusercontent.com/taher-dev/web-prog-lab-clp/refs/heads/main/get.json
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/taher-dev/web-prog-lab-clp/refs/heads/main/get.json",
    true
  );

  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    let list = document.getElementById("dataList");
    let str = "";
    for (i in data) {
      for (j in data[i]) {
        str += `<p>${j} : ${data[i][j]}<p>`;
      }
    }
    list.innerHTML = str;
  };

  xhr.send();
});
