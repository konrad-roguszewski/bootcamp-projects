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

const sectionElement = document.getElementById("slider");
sectionElement.addEventListener("click", handleClickNextBtn);

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

  const nextBtnElement = document.createElement("button");
  nextBtnElement.innerText = "następne";
  nextBtnElement.classList.add('next');
  sectionElement.appendChild(nextBtnElement);
};

let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > 2) {slideIndex = 1};
  [...slides].forEach(slide => slide.style.display = "none");
  slides[slideIndex-1].style.display = "block";
};

function handleClickNextBtn(event) {
  if (!event.target.classList.contains('next')){
    return;
  };
  showSlides(slideIndex += 1);
};