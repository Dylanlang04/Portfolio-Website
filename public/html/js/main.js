
document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.icon');

  const observer = new IntersectionObserver((entries) => {
    requestAnimationFrame(() => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible';
          entry.target.style.animation = `fadeIn 1s forwards ${0.3 * (index + 1)}s`;
        } else {
          // Reset animation when the element leaves the viewport
          entry.target.style.animation = 'none';
          entry.target.style.visibility = 'hidden';
        }
      });
    });
  }, { threshold: 0.1 });
  
  icons.forEach(icon => {
    icon.style.visibility = 'hidden';
    observer.observe(icon);
  });

        
  function initParticles(id) {
    if (!document.getElementById(id)) {
      console.error(`Error: Element with id '${id}' not found.`)
      return
    }

    console.log(`Initializing particles for ${id}`)
    particlesJS(id, {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
           "speed": 0.5,
           "opacity_min": 0,
           "sync": false
          }
       },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
           "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
           "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    })
        
    setTimeout(() => {
      document.getElementById(id).classList.add('loaded')
    }, 100)

  }
  //This code is code from a plugin, source: lost it.
  const wrapper = document.querySelector('.parallax')
  const parallaxItems = document.querySelectorAll('.parallax')

  wrapper.addEventListener('mouseenter', () => {
    const rect = wrapper.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    wrapper.dataset.centerX = centerX
    wrapper.dataset.centerY = centerY
  })

  wrapper.addEventListener('mousemove', (e) => {
    
    const centerX = parseFloat(wrapper.dataset.centerX)
    const centerY = parseFloat(wrapper.dataset.centerY)
    const offsetX = (e.clientX - centerX) / 40
    const offsetY = (e.clientY - centerY) / 40
    
    parallaxItems.forEach((item, index) => {
        const intensity = (index + 1) * 2
        item.style.transform = `translate(${offsetX * intensity}px, ${offsetY * intensity}px)`
    })
  })

  wrapper.addEventListener('mouseleave', () => {
    
    parallaxItems.forEach((item) => {
        item.style.transform = 'translate(0, 0)'
    })
  })
  
  initParticles("particles-js")  

  const textarea = document.getElementById("info")
  const charCount = document.getElementById("char-count")
  
  textarea.addEventListener("input", () => {
      const maxLength = textarea.getAttribute("maxlength")
      const currentLength = textarea.value.length
      charCount.textContent = maxLength - currentLength
  })
})
