/**FUNCION GIF */
$(window).load(function(){
    /*Al terminar de cargar el sitio, primero se va la animación del Preloader*/
    $("#loader").fadeOut();
    /*Medio segundo despues, se va poco a poco el fondo del preloader*/
    $("#loader-wrapper").delay(5000).fadeOut("slow")
})
/**FUNCION NAVBAR */
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
/**FUNCION SLIDER */
var slideIndex = 1;
showDivs(slideIndex);
  
function plusDivs(n) {
  showDivs(slideIndex += n);
}
  
function currentDiv(n) {
  showDivs(slideIndex = n);
}
  
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
/**FUNCION ALERTA*/
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function verificar() {
  var no = getParameterByName("n");
  var gracias = ("Gracias por enviar tu mensaje!<br>En poco tiempo nos contactaremos contigo!");
  if (no == 1) {
    alert('no funciona por el momento') 
  }else{
      document.getElementById("gracias").style.display = "block";
      document.getElementById("txtAlert").innerHTML = gracias;  
  }
}

/**ENVIAR CORREO ELECTRONICO */
function envioCorreo() {
  var nombre = document.getElementsByName("nombre")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var titulo = document.getElementsByName("titulo")[0].value;
  var mensaje = document.getElementsByName("mensaje")[0].value;
  var response = grecaptcha.getResponse();
  var enviomensaje = (
    '<h3>Contacto desde el sitio de aVender</h3><br><br>'+
    `<b>Nombre:</b>${nombre}<br>` + 
    `<b>Email:</b>${email}<br>` +
    `<b>Titulo:</b>${titulo}<br>` +
    `<b>Mensaje:</b>${mensaje}<br><br><img src='http://www.a-vender.com/images/aVender.png' alt='logo savia' width='250'></img>`
    
  ) 
  if (response.length == 0) {
    alert('Marque el captcha por favor');
    return false;
  }else if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
    alert("El campo nombre no debe ir vacio o lleno de espacios en blanco");
    return false;
  }else if (!(/\S+@\S+\.\S+/.test(email))) {
    alert("Debe escribir un correo valido");
    return false;
  }else if (titulo == null || titulo.length == 0 || /^\s+$/.test(titulo)) {
    alert("El campo titulo no debe ir vacio o llenos de espacios en blanco");
    return false;
  }else if (mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
    alert("El campo mensaje no debe ir vacio o lleno de espacios en blanco");
    return false;
  }else {
    Email.send({
      Host : "smtp.gmail.com",
      Username : "testmail@saviasoft.com",
      Password : "testmail12123",
      To : 'lcp.caiza@yavirac.edu.ec',
      From : "testmail@saviasoft.com",
      Subject : "Contacto desde aVender",
      Body : `${enviomensaje}`
    }).then(
      message => alert(message)
    );
  }
  return true;
}