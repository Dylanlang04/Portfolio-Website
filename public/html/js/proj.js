const track = document.getElementById('collageTrack')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const project = document.querySelector('.project')




function updateArrows() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth
    leftArrow.disabled = track.scrollLeft <= 0
    rightArrow.disabled = track.scrollLeft >= maxScrollLeft
  }

function scrollCollage(direction) {
  const style = window.getComputedStyle(project)
  const marginLeft = parseFloat(style.marginLeft) || 0
  const marginRight = parseFloat(style.marginRight) || 0

  const scrollAmount = 2*(project.offsetWidth + marginLeft + marginRight)
  track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  setTimeout(updateArrows, 350)
}

track.addEventListener('scroll', updateArrows)
window.addEventListener('load', updateArrows)