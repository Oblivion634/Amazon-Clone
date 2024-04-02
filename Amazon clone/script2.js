/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  
  // Set interval for prevImage
  setInterval(prevImage, 3000);
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  document.getElementsByClassName("prev")[0].addEventListener("click", function() {
    slideIndex -= 2;
    if (slideIndex < 0) {slideIndex = document.getElementsByClassName("slides")[0].getElementsByTagName("img").length - 1;}
    showSlides();
  });
  
  document.getElementsByClassName("next")[0].addEventListener("click", function() {
    if (slideIndex >= document.getElementsByClassName("slides")[0].getElementsByTagName("img").length - 1) {slideIndex = -1;}
    showSlides();
  });

  const scrollContainer = document.querySelectorAll('.products');
  for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrolleft += evt.deltaY;
    });
  }