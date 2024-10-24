

window.onload = clear();
function clear() {

 /* if(document.getElementById("metadata_button") != null)
    {
      var btn = document.getElementById("metadata_button");
      btn.value = "Ver Diferencias de Metadata";

    }*/

   if(document.getElementById("range_form") != null)
      {
        document.getElementById("range_form").innerHTML =  document.getElementById("range_form").innerHTML.replace('View changes from', 'Ver cambios desde ').replace('to', ' hasta ');
        changeDivText();
      }


}

var div = document.getElementById("metadata_diff");
if(div != null)
     div.addEventListener("click", function () {
        changeDivText();
      });

 /*
function changeButtonText() {

  var btn = document.getElementById("metadata_button");
  var div = document.getElementById("metadata_diff");
  if ( div.style.display == "none")
      btn.value = "Ver Diferencias de Metadata";
  if ( div.style.display == "block")
      btn.value = "Ocultar Diferencias de Metadata";
}

respondToVisibility = function (element, callback) {
  var options = {
    root: document.documentElement,
  };

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      callback(entry.intersectionRatio > 0);
    });
  }, options);

  observer.observe(element);
};

respondToVisibility(document.getElementById("metadata_diff"), (visible) => {
    changeButtonText();
});*/

function changeDivText(){

  var paraf = document.getElementsByTagName('p');

    for(var i=0; i< paraf.length; i++){

        paraf[i].innerHTML =  paraf[i].innerHTML.replace('Set author email of', 'Establecido correo electrónico del autor de ').replace('Set maintainer email of', 'Establecido correo electrónico del mantenedor de ')
        .replace('Set format of resource', 'Establecido formato de recurso ').replace('Changed value of field' , 'Modificado el valor del campo ').replace('Changed the source URL of' , 'Modificada la URL de origen de ');

    }


}

