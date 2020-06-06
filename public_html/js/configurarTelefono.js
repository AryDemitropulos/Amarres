//Escribir telefono sin espacios, sin caracteres especiales, 
//sin el 15, sin el 0, los 10 numeros del celular. 
//EJ: var telefono = "2216208337"
var telefono = "2216208337";


//No cambiar, es el codigo de area de Argentina
var codigoDeArea = "549";


$("a[name ='u-whatsapp-button']").each(function () {
   this.href = "https://wa.me/" + codigoDeArea + telefono;
});