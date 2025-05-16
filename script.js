const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Open modal when button is clicked
openBtn.onclick = function () {
  modal.style.display = "block";
};

// Close modal when X is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
t