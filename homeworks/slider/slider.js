fetch("photos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    showSlides(slideIndex);
  })
  .catch(function (error) {
    console.error("error: " + error);
  });

const slides = document.getElementsByClassName("mySlides");
const sectionElement = document.getElementById("slider");
sectionElement.addEventListener("click", handleClickBtnNext);
sectionElement.addEventListener("click", handleClickBtnPrev);
sectionElement.addEventListener("click", handleClickBtnImgNum);

function appendData(data) {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add('btn-container');
  sectionElement.appendChild(btnContainer);

  data.forEach(dataElement => {
    const containerElement = document.createElement("div");
    containerElement.classList.add('mySlides');
    sectionElement.appendChild(containerElement);

    const imageElement = document.createElement("img");
    imageElement.src = dataElement.url;
    containerElement.appendChild(imageElement);

    const noteElement = document.createElement("p");
    noteElement.classList.add('text');
    noteElement.innerText = `"${dataElement.caption}" by ${dataElement.author}`;
    containerElement.appendChild(noteElement);

    const imgNumBtn = document.createElement("button");
    imgNumBtn.innerText = `${dataElement.id}`;
    imgNumBtn.classList.add('img-num');
    imgNumBtn.setAttribute("data-id", dataElement.id);
    btnContainer.appendChild(imgNumBtn);
  });
   
  const prevBtnElement = document.createElement("button");
  prevBtnElement.innerText = "poprzednie";
  prevBtnElement.classList.add('prev');
  prevBtnElement.setAttribute("disabled", "")
  sectionElement.appendChild(prevBtnElement);
  
  const nextBtnElement = document.createElement("button");
  nextBtnElement.innerText = "następne";
  nextBtnElement.classList.add('next');
  sectionElement.appendChild(nextBtnElement);
};

let slideIndex = 1;

function changeSlides(n) {
  let newIndex = slideIndex += n;
  handleDisabledBtn(newIndex);
  showSlides(newIndex);
};

function currentSlide(n) {
  let newIndex = slideIndex = n;
  handleDisabledBtn(newIndex);
  showSlides(newIndex);
};

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  };
  if (n < 1) {
    slideIndex = slides.length;
  };
  [...slides].forEach(slide => slide.style.display = "none");
  slides[slideIndex-1].style.display = "block";
};

function handleClickBtnNext(event) {
  if (!event.target.classList.contains('next')){
    return;
  };
  changeSlides(1);
};

function handleClickBtnPrev(event) {
  if (!event.target.classList.contains('prev')){
    return;
  };
  changeSlides(-1);
};

function handleClickBtnImgNum(event) {
  if (!event.target.classList.contains('img-num')){
    return;
  };
  const id = parseInt(event.target.dataset.id);
  currentSlide(id);
};
    
function handleDisabledBtn(newIndex) {
  const nextBtnElement = document.querySelector(".next");
  const prevBtnElement = document.querySelector(".prev");
  prevBtnElement.disabled = false;
  nextBtnElement.disabled = false;
  if (newIndex === slides.length) {
    nextBtnElement.disabled = true;
  } else if (newIndex === 1) {
    prevBtnElement.disabled = true;
  };
};