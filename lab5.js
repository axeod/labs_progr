// =====================
// 5.1 Carousel
// =====================
const slides = [
  { src: "images/cars.png", caption: "Слайд 1: Авто" },
  { src: "images/auto.png", caption: "Слайд 2: Автоследование" },
  { src: "images/stock.png", caption: "Слайд 3: Акции" },
  { src: "images/obligations.png", caption: "Слайд 4: Облигации" },
  { src: "images/pif.png", caption: "Слайд 5: ПИФы" },
];

let slideIndex = 0;

const slideImg = document.getElementById("slideImg");
const slideCaption = document.getElementById("slideCaption");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const dotsWrap = document.getElementById("dots");

function renderDots() {
  dotsWrap.innerHTML = "";
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "dot-btn" + (i === slideIndex ? " active" : "");
    b.type = "button";
    b.addEventListener("click", () => {
      slideIndex = i;
      renderSlide();
    });
    dotsWrap.appendChild(b);
  });
}

function renderSlide() {
  slideImg.src = slides[slideIndex].src;
  slideCaption.textContent = slides[slideIndex].caption;
  renderDots();
}

prevSlide.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  renderSlide();
});

nextSlide.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  renderSlide();
});

renderSlide();


// =====================
// 5.2 Calculator (стоимость услуг)
// =====================
const serviceType = document.getElementById("serviceType");
const qty = document.getElementById("qty");
const discount = document.getElementById("discount");
const calcCostBtn = document.getElementById("calcCostBtn");
const costResult = document.getElementById("costResult");

function calcCost() {
  const price = Number(serviceType.value);
  const count = Number(qty.value);
  const disc = Number(discount.value);

  if (!Number.isFinite(price) || !Number.isFinite(count) || count <= 0 || !Number.isFinite(disc) || disc < 0 || disc > 100) {
    costResult.textContent = "Ошибка";
    return;
  }

  const total = price * count * (1 - disc / 100);
  costResult.textContent = total.toFixed(0);
}

calcCostBtn.addEventListener("click", calcCost);
calcCost();


// =====================
// 5.3 Bar chart
// =====================
const barChart = document.getElementById("barChart");
const genBars = document.getElementById("genBars");
const randomBars = document.getElementById("randomBars");

// базовые значения
let barValues = [12, 35, 22, 48, 17, 40]; // проценты 0..100

function renderBars(values) {
  barChart.innerHTML = "";

  values.forEach((v) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    // высота в процентах от контейнера
    bar.style.height = Math.max(8, Math.min(100, v)) + "%";

    const label = document.createElement("span");
    label.textContent = v;

    bar.appendChild(label);
    barChart.appendChild(bar);
  });
}

genBars.addEventListener("click", () => {
  barValues = [10, 30, 55, 42, 18, 60];
  renderBars(barValues);
});

randomBars.addEventListener("click", () => {
  barValues = Array.from({ length: 6 }, () => Math.floor(Math.random() * 91) + 10); // 10..100
  renderBars(barValues);
});

renderBars(barValues);


// =====================
// 5.4 Pie chart (conic-gradient)
// =====================
const pie = document.getElementById("pie");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const applyPie = document.getElementById("applyPie");

function applyPieChart() {
  let a = Math.max(0, Number(p1.value));
  let b = Math.max(0, Number(p2.value));
  let c = Math.max(0, Number(p3.value));

  const sum = a + b + c;
  if (!Number.isFinite(sum) || sum <= 0) return;

  // нормализуем к 100%
  a = (a / sum) * 100;
  b = (b / sum) * 100;
  c = (c / sum) * 100;

  const aEnd = a;
  const bEnd = a + b;

  // цвета как в легенде
  pie.style.background =
    `conic-gradient(#2f80ff 0 ${aEnd}%,
                   #22c55e ${aEnd}% ${bEnd}%,
                   #f59e0b ${bEnd}% 100%)`;
}

applyPie.addEventListener("click", applyPieChart);
applyPieChart();
