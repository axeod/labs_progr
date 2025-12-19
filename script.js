document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calcBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    let amount = document.getElementById("amount").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;

    if (amount === "" || years === "" || rate === "") {
      alert("Заполните все поля");
      return;
    }

    amount = Number(amount);
    years = Number(years);
    rate = Number(rate) / 100;

    const result = amount * Math.pow(1 + rate, years);

    document.getElementById("result").textContent = result.toFixed(2);
  });
});
