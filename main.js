document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = document.getElementById("correoLogin").value.trim();
  const regexCBTIS = /^[0-9]{14}@cbtis122\.edu\.mx$/;

  if (!regexCBTIS.test(correo)) {
    alert("Debes ingresar tu correo institucional del CBTIS 122, ejemplo: 23308051220722@cbtis122.edu.mx");
    return;
  }

  document.getElementById("loginSection").style.display = "none";
  document.getElementById("sugerenciasSection").style.display = "block";
  document.getElementById("encuestaSection").style.display = "block";
  document.getElementById("mejoraSection").style.display = "block";
  document.getElementById("carteleraSection").style.display = "block";
});
