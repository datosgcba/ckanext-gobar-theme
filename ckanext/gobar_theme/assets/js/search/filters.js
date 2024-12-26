$(function () {
    $('.menu-button').on('click', function () {
        console.log('ejecuto click menu-button')
        $('.filters-container').addClass('side-visible');
        $('#search-results').addClass('hidden-by-filters');
    });
    $('.hide-filters-button').on('click', function () {
        console.log('ejecuto click hide-filters-button')
        $('.filters-container').removeClass('side-visible');
        $('#search-results').removeClass('hidden-by-filters');
    })

    $('#field-order-by').change(function(){
        $('#submitSearch').click()
    })

    $('#field-order-by-form').change(function(){
        $('#submit-order').click()
    })

    $('#field-order-by-resource').change(function(){
        $('#submit-order-resource').click()
    })
    // Filtrar recursos de un data set por nombre//
 /*$('#submit-search-resource').on('click', function(){
   
    var query = $('#search-name').val().toLowerCase();

    //filtro el listado que tengo en pantalla
   $(".package-info").each(function( index,item ){
        resource_name = $(item).find("h3")
        var existe = resource_name.filter(function() {
            return $(this).text().toLowerCase().trim().indexOf(query) == -1;
          }).length;
        
        var divParent = $(this).parent();          
        if(existe == 1){
            divParent.parent().hide();
        }else{
            divParent.parent().show();
        }
    });    
   
});*/
   
//sort resoruces

/* recursos.sort(function (a, b){
return a.nombre.localeCompare(b.nombre, 'en', { numeric: true })
});*/
    
});



