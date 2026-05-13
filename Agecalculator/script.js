document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const DOb = document.getElementById("DOB").value;
  const CurDate = document.getElementById("CurrentDate").value;

  let Age = Number(CurDate.split("-")[0]) - Number(DOb.split("-")[0]);
  let Months = Number(CurDate.split("-")[1]) - Number(DOb.split("-")[1]);
  let Day = Number(CurDate.split("-")[2]) - Number(DOb.split("-")[2]);

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";

  document.getElementById("MaxAge").innerText = Age;
  document.getElementById("Month").innerText = Months;
  document.getElementById("Days").innerText = Day;
});

























