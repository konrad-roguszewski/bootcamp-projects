fetch("photos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    showSlides();
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

let slideIndex = 0;
let timer;

function showSlides() {
  [...slides].forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1};
  slides[slideIndex-1].style.display = "block";
  timer = setTimeout(showSlides, 3000);
  if (slideIndex === slides.length) {clearTimeout(timer)};
  handleDisabledBtn(slideIndex);
};

function changeSlides(position) {
  slideIndex += position;
  if (slideIndex > slides.length) {slideIndex = 1}
  else if(slideIndex < 1){slideIndex = slides.length};
  [...slides].forEach(slide => slide.style.display = "none");
  slides[slideIndex-1].style.display = "block";
  handleDisabledBtn(slideIndex);
};

function currentSlide(index) {
  if (index> slides.length) {index = 1}
  else if(index < 1){index = slides.length}
  slideIndex = index;
  [...slides].forEach(slide => slide.style.display = "none");
  slides[index-1].style.display = "block";
  handleDisabledBtn(slideIndex);
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