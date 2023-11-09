
document.addEventListener('DOMContentLoaded', function () {
    const navigationMenu = document.getElementById('navigation-menu');

    fetch('../nav.html')
    .then(response => response.text())
    .then(data => {
      navigationMenu.innerHTML = data;

      const ButtonRegister = document.getElementById("ButtonRegister");

      if (ButtonRegister) {
          ButtonRegister.addEventListener("click", function() {
              // Tu lógica aquí al hacer clic en el botón de registro
              console.log("¡Botón de registro clicado!");
              window.location.href = "Registro.html";
              // Puedes redirigir a la página de registro u otras acciones
          });
      }
    })
    .catch(error => console.log(error));
});