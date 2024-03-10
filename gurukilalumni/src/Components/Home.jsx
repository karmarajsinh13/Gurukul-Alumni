import React from 'react'
import banner1 from "../img/banner1.jpg"

export default function Home() {
    let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-100 * slideIndex}%)`;
  }
}

function nextSlide() {
  if (slideIndex < 4) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = 4;
  }
  showSlides();
}

setInterval(nextSlide, 4000);
  return (
    <div>
      <div class="slider">
  <div class="slides">
    <img src={banner1} alt="Image 1"/>
    <img src={banner1} alt="Image 2"/>
    <img src={banner1} alt="Image 3"/>
    <img src={banner1} alt="Image 4"/>
    <img src={banner1} alt="Image 5"/>
  </div>
  <button class="prev" onclick="prevSlide()">&#10094;</button>
  <button class="next" onclick="nextSlide()">&#10095;</button>
</div>
    </div>
  )
}
