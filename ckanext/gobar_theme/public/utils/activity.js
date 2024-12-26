
       
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
        .replace('Set format of resource', 'Establecido formato de recurso ').replace('Changed value of field' , 'Modificado el valor del campo ').replace('Changed the source URL of' , 'Modificada la URL de origen de ')
        .replace('On' , ' En ').replace('of resource','en el recurso ').replace('Removed maintainer email from ', 'Eliminado el mail del mantenedor de ')
        .replace('Removed author email from', 'Eliminado el mail del autor de').replace ('Private',' Privado').replace ('Public',' Público');

    }

    var strong = document.getElementsByTagName('strong');

    for(var i=0; i< strong.length; i++){     
      strong[i].innerHTML =  strong[i].innerHTML.replace('On' , 'En ');

    }

      
}

