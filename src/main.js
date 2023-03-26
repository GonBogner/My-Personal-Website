let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



function submitForm(event) {
    event.preventDefault();
    const email = document.querySelector('input[name=email]').value;
    const subject = "Mail from Gon's Website";
    const body = "Hi! contact me anytime here or via +972547606046";
    const cc = "gon@bgnr.net";
    const bcc = "gon.bogner@gmail.com";

    window.location.href = `mailto:${email}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body}`;
}

