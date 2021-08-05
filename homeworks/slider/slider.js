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
  
function appendData(data) {
  const sectionElement = document.getElementById("slider");

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
};

let slideIndex = 1;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  slides[slideIndex-1].style.display = "block";
}