function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(body.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/img/light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/img/dark.png")
  }
}

// Visitantes //
  function updateVisitorCounter() {
    let visits = parseInt(localStorage.getItem("visits")) || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem("visits", visits);
    
    const counterElement = document.getElementById("counter");
    if (counterElement) {
      // Animate counter
      let current = 0;
      const target = visits;
      const increment = target / 50;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counterElement.textContent = Math.floor(current);
      }, 20);
    }
  }