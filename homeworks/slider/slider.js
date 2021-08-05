fetch("photos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    showSlides(slideIndex);
  })
  .catch(function (error) {
    console.log("error: " + error);
  });

const slides = document.getElementsByClassName("mySlides");
const sectionElement = document.getElementById("slider");
sectionElement.addEventListener("click", handleClickBtnNext);
sectionElement.addEventListener("click", handleClickBtnPrev);

function appendData(data) {
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

function handleDisabledBtn(newIndex) {
  const nextBtnElement = document.querySelector(".next");
  const prevBtnElement = document.querySelector(".prev");
  prevBtnElement.disabled = false;
  nextBtnElement.disabled = false;
  if (newIndex === slides.length) {
    nextBtnElement.disabled = true;
  } else if (newIndex === 1) {
    prevBtnElement.disabled = true;
  }
}