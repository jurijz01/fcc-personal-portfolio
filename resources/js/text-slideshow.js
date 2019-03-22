// Welcome section Text slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Bottom Text slideshow
var slideIndex = 0;
showMySlides();

function showMySlides() {
  var i;
  var slidesMy = document.getElementsByClassName("bottom-slides");
  for (i = 0; i < slidesMy.length; i++) {
    slidesMy[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slidesMy.length) {slideIndex = 1} 
  slidesMy[slideIndex-1].style.display = "block"; 
  setTimeout(showMySlides, 2000); // Change image every 2 seconds
}
