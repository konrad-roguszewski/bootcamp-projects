let doughAmount = 0;
let flourAmount = 100;
let doughInterval = null;
let doughProgress = 0;

const status = document.querySelector("#dough-status");
const makeDought = document.querySelector("#make-dough");
const doughContainer = document.querySelector("#dough-container");
// const doughBalls = document.querySelectorAll(".dough-ball");

// const doughBall = document.querySelector(".dough-ball");

// displayDoughAmount();
displayFlourAmount();

makeDought.addEventListener("click", handleDoughMakingStart);
doughContainer.addEventListener("click", handleDoughBallSize);
// doughBalls.forEach(function (doughBall) {
//     doughBall.addEventListener("click", handleDoughBallSize);
//   });

function handleDoughMakingStart() {
  makeDought.removeEventListener("click", handleDoughMakingStart);
  makeDought.addEventListener("click", handleDoughMakingStop);
  makeDought.innerText = "Zatrzymaj lepienie";
  doughInterval = setInterval(() => {
    if (doughProgress === 0) {
      if (flourAmount < 10) {
        alert("Za mało mąki!");
        clearInterval(doughInterval);
        return;
      }
      flourAmount -= 10;
      displayFlourAmount();
    }
    doughProgress += 5;
    if (doughProgress === 100) {
      doughAmount++;
      doughProgress = 0;
      displayDoughAmount();
      renderDoughBall();
    }
    status.style.backgroundImage = `linear-gradient(90deg, rgba(36,255,59,1) 0%, rgba(0,0,0,0.6) ${doughProgress}%)`;
  }, 50);
}

function handleDoughMakingStop() {
  makeDought.removeEventListener("click", handleDoughMakingStop);
  makeDought.addEventListener("click", handleDoughMakingStart);
  makeDought.innerText = "Ulep ciasto";
  clearInterval(doughInterval);
}

function displayDoughAmount() {
  document.querySelector("#dough-amount").innerText = doughAmount;
}

function displayFlourAmount() {
  document.querySelector("#flour-amount").innerText = flourAmount;
}

function renderDoughBall() {
  const doughContainer = document.querySelector("#dough-container");
  const doughNode = document.createElement("div");

  doughNode.classList.add("dough-ball");
  doughNode.style = "width: 50px; border-radius: 50%; background: yellow";
  doughContainer.appendChild(doughNode);

//   doughBalls.forEach(function (doughBall) {
//     doughBall.addEventListener("click", handleDoughBallSize);
//   });

//   const doughBall = document.querySelector(".dough-ball");
//   doughBall.addEventListener("click", handleDoughBallSize);
}

function handleDoughBallSize(event) {
  console.log('dough click')
//   const doughBall = document.querySelector(".dough-ball");
  if (!event.target.classList.contains('dough-ball')) {
    return;
  }
  const doughBall = event.target

  const step = 5;

  decreaseHandler();

  function setDoughBallSize(size) {
    doughBall.style.width = `${size}px`;
    doughBall.style.height = `${size}px`;
  }
  // doughBall.addEventListener("click", decreaseHandler);
  function decreaseHandler() {
    let doughBallSize = parseInt(doughBall.style.width);
    doughBallSize -= step;
    setDoughBallSize(doughBallSize);
  }
}
