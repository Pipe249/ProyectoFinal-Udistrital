
document.addEventListener('DOMContentLoaded', function () {
    const navigationMenu = document.getElementById('navigation-menu');

    fetch('../nav.html')
    .then(response => response.text())
    .then(data => {
      navigationMenu.innerHTML = data;

      const ButtonRegister = document.getElementById("ButtonRegister");

      if (ButtonRegister) {
          ButtonRegister.addEventListener("click", function() {
              console.log("¡Botón de registro clicado!");
              window.location.href = "Registro.html";
          });
      }
    })
    .catch(error => console.log(error));
});

document.addEventListener('DOMContentLoaded', function () {
    const RegisterButton = document.getElementById("RegisterButton");

    if(RegisterButton) {
        RegisterButton.addEventListener("click", function() {
            window.location.href = "Registro.html"
        })
    }
    
});