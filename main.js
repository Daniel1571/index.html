// Seleccionamos el formulario por su id
const encuestaForm = document.getElementById('encuestaForm');

// Agregamos el listener para cuando se envíe el formulario
encuestaForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Esto evita que la página se recargue

  // Ahora capturamos los valores de los campos
  const sentimiento = document.getElementById('sentimiento').value.trim();
  const ambiente = document.getElementById('ambiente').value.trim();
  const situaciones = document.getElementById('situaciones').value.trim();
  const mejoras = document.getElementById('mejoras').value.trim();

  // Validamos que los campos requeridos no estén vacíos
  if (!sentimiento || !ambiente || !mejoras) {
    alert('Por favor, llena todos los campos requeridos.');
    return; // Salimos para que el formulario no se envíe si falta info
  }

  // Aquí iría el código para enviar esos datos a donde quieras (Firebase, servidor, etc.)

  // Ejemplo: solo mostrar alerta de éxito
  alert('¡Encuesta enviada con éxito! Gracias por tu participación.');

  // Limpiamos el formulario para que se pueda usar otra vez
  encuestaForm.reset();
});
