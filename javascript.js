var image = document.getElementById("myImage");

image.addEventListener("mouseover", function () {
  image.classList.add("zoomed");
});

image.addEventListener("mouseout", function () {
  image.classList.remove("zoomed");
});
