// JavaScript personalizado para la página

// Smooth scrolling para los enlaces del navbar
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Efecto de aparición al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Aplicar el observer a las tarjetas
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.add("fade-in")
    observer.observe(card)
  })

  // Manejo del formulario de contacto
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener datos del formulario
      const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value,
      }

      // Aquí puedes agregar la lógica para enviar el formulario
      console.log("Datos del formulario:", formData)

      // Mostrar mensaje de confirmación
      alert("¡Gracias por tu mensaje! Te contactaremos pronto.")

      // Limpiar formulario
      contactForm.reset()
    })
  }

  // Efecto parallax suave en el hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroSection = document.querySelector(".hero-section")
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.1}px)`
    }
  })
})
