const params = new URLSearchParams(window.location.search);
const dataset = params.get("dataset") || "未指定";

const info = document.getElementById("dataset-info");
const form = document.getElementById("report-form");
const recordsBody = document.getElementById("records");

info.textContent = `生產報工資料檔：${dataset}`;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const worker = document.getElementById("worker").value;
  const quantity = Number(document.getElementById("quantity").value);
  const start = document.getElementById("start-time").value;
  const end = document.getElementById("end-time").value;

  if (!worker || !quantity || !start || !end) {
    alert("請完整填寫所有欄位。");
    return;
  }

  if (new Date(end) <= new Date(start)) {
    alert("結束時間必須晚於開始時間。");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${dataset}</td>
    <td>${worker}</td>
    <td>${quantity}</td>
    <td>${start.replace("T", " ")}</td>
    <td>${end.replace("T", " ")}</td>
    <td>${new Date().toLocaleString("zh-TW")}</td>
  `;
  recordsBody.prepend(row);

  form.reset();
});
