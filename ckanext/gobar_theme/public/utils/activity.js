
       
window.onload = clear();          
function clear() {             

  if(document.getElementById("metadata_button") != null)
    {
      var btn = document.getElementById("metadata_button");
      btn.value = "Ver Diferencias de Metadata";
 
    }

   if(document.getElementById("range_form") != null)
      {
        document.getElementById("range_form").innerHTML =  document.getElementById("range_form").innerHTML.replace('View changes from', 'Ver cambios desde ').replace('to', ' hasta ');
        changeDivText();
      }
      
     
}

var btn = document.getElementById("metadata_button");
if(btn != null)
     btn.addEventListener("click", function () {
        changeButtonText();
        changeDivText();
      });

    
function changeButtonText() { 

  var btn = document.getElementById("metadata_button");

  if (btn.value === "Show metadata diff") {
      btn.value = "Ocultar Diferencias de Metadata";
  } else {
      btn.value = "Ver Diferencias de Metadata";
  }
}

function changeDivText(){

  var paraf = document.getElementsByTagName('p');

    for(var i=0; i< paraf.length; i++){
     
        paraf[i].innerHTML =  paraf[i].innerHTML.replace('Set author email of', 'Establecido correo electrónico del autor de ').replace('Set maintainer email of', 'Establecido correo electrónico del mantenedor de ').replace('Set format of resource', 'Establecido formato de recurso ');

    }

      
}

