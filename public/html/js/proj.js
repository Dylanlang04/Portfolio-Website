const track = document.getElementById('collageTrack');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function updateArrows() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    leftArrow.disabled = track.scrollLeft <= 0;
    rightArrow.disabled = track.scrollLeft >= maxScrollLeft;
  }

function scrollCollage(direction) {
    const scrollAmount = 900;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  }

track.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);