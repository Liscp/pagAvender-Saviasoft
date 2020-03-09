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
  