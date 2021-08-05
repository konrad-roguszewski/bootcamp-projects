fetch("photos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (error) {
    console.log("error: " + error);
  });

function appendData(data) {
  const sectionElement = document.getElementById("slider");

  data.forEach(dataElement => {
    const imageElement = document.createElement("img");
    imageElement.src = dataElement.url;
    sectionElement.appendChild(imageElement);
  });
};