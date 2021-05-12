// let dropdown = document.getElementsByClassName("dropdown-btn");
// let i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//   this.classList.toggle("active");
//   let dropdownContent = this.nextElementSibling;
//   if (dropdownContent.style.display === "block") {
//   dropdownContent.style.display = "none";
//   } else {
//   dropdownContent.style.display = "block";
//   }
//   });
// }

const li = document.querySelector(".dropdown-btn");
const div = document.querySelector(".dropdown-container");

function handleDropdownToggle() {
    if (div.style.display === "block"){
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

li.addEventListener("click", handleDropdownToggle)