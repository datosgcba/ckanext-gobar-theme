[![Build Status](https://travis-ci.org/poligarcia/ckanext-gcbaandinotheme.svg?branch=master)](https://travis-ci.org/poligarcia/ckanext-gcbaandinotheme)

[![Docs Status](https://readthedocs.org/projects/ckanext-gcbaandinotheme/badge/?version=master)](http://ckanext-gcbaandinotheme.readthedocs.io/es/master/)

# ckanext-gcbaandinotheme

Plugin visual del portal de Datos Abiertos de la Ciudad Autónoma de Buenos Aires para Andino. 

## Instrucciones de instalación

1. Ingresar al host donde se encuentra instalado Andino.
1. Ingresar al contenedor `portal` (`docker-compose exec bash`).
1. Dentro del contenedor `portal` activar el `virtualenv` de CKAN: `. /usr/lib/ckan/default/bin/activate`.
1. Instalar el plugin con `pip`: `pip install -e git+https://github.com/datosgcba/ckanext-gcbaandinotheme.git@81c7ac9ce93c8b11cfb6828c3a17ddadd39b0bb1#egg=ckanext-gcbaandinotheme`.
1. Editar el archivo `/etc/ckan/default/production.ini` y modificar:
    1. Agregar `gcbaandinotheme` a la lista de plugins inmediatamente antes de `gobar_theme`.
    1. Agregar `andino.base_page = gcba_base_page.html` dentro de la sección `[app:main]`.
1. Reiniciar Andino.

## Nuevas secciones "Acerca"

### Agregado del código del template de la nueva sección al repositorio de código

Para agregar una nueva sección del menú "Acerca" es necesario crear un nuevo template HTML siguiendo las instrucciones de la documentación de Andino ubicadas [aquí](https://portal-andino.readthedocs.io/es/stable/quickstart/#como-puedo-crear-y-mostrar-mis-secciones-personalizadas).

Para simplificar el agregado de las secciones, se recomienda subir el código HTML del template a un archivo dentro del directorio `ckanext/gcbaandinotheme/templates` de este repositorioy ponerle un nombre descriptivo de la sección (ejemplo: `equipo.html`).

Si es necesario subir imágenes que acompañen al template, las mismas debe ser subidas en la ruta `ckanext/gcbaandinotheme/public/img`. Las mismas estarán disponibles en el servidor web en la ruta `/img`.

### Actualización del template dentro de Andino

Para que el código del nuevo template esté disponible para ser usando en Andino, el encargado de gestionar la infraestructura del portal de datos de la Ciudad Autónoma de Buenos Aires deberá actualizar el repositorio de código dentro del contenedor `portal` de Andino siguiendo los siguientes pasos:

1. Ingresar por SSH a una consola remota del servidor _host_ de Andino, usando un usuario _sudoer_ o con permisos para operar contendores de Docker.
1. Cambiar al directorio de instalación de Andino (ejemplo: `cd /etc/portal`).
1. Ingresar al contenedor `portal` de Andino: `sudo docker-compose -f latest.yml exec portal bash`.
1. Dentro del contenedor cambiar al directorio donde se encuentra instalado el plugin: `cd /usr/lib/ckan/default/src/ckanext-gcbaandinotheme`.
1. Sincronizar el repositorio: `git fetch`.
1. Saltar a la versión específica que agrega el cambio que queremos actualizar en el sitio (ejemplo: el agregado del archivo `equipo.html` y/o imágenes): `git checkout <hash del commit>`. Para esto será necesario indicarle al equipo encargado de gestionar la infraestructura del sitio cual es el _hash_ del _commit_ a instalar.
1. Salir del contenedor `portal`: `exit`.
1. Reiniciar el contenedor `portal` y `nginx`: `sudo docker-compose -f latest.yml restart nginx portal --no-deps`.

### Configuración de la sección Acerca

Una vez que el template de la nueva sección "Acerca" se encuentra disponible dentro del contendor `portal` de Andino, puede ser configurado siguiendo las instrucciones de la [documentación oficial de Andino](https://portal-andino.readthedocs.io/es/stable/quickstart/#como-puedo-crear-y-mostrar-mis-secciones-personalizadas). Simplemente será necesario acceder al panel de administración de Andino y agregar la sección Acerca utilizando el mismo nombre de archivo guardado en el repositorio.

## Agregado de nuevos elementos en la sección Historias

La sección "Historias" está compuesta por un template HTML ubicado en la ruta `ckanext/gcbaandinotheme/templates/historias.html` y un conjunto de imágenes en formato _png_ ubicadas en `ckanext/gcbaandinotheme/public/img/historias`.

El _markup_ HTML del template de la sección define la forma en que las mismas se mostrarán, para agregar una historia simplemente es necesario agregar un elemento nuevo dentro del elemento `div.histories-list` del template `historias.html` con la siguiente estructura:

```html
<a href="{{ LINK A LA HISTORIA }}" target="blank" class="dataset-item">
    <div class="col-xs-12 col-md-3">
        <div class="dataset-container">
            <div class="dataset-border">
                <div class="restricted-max-width">
                    <div class="col-xs-912"><img src="{{ RUTA A LA IMAGEN THUMB }}"></div>
                    <div class="dataset-content col-xs-12">
                        <h4>{{ TÍTULO DE LA HISTORIA }}</h4>
                        <div class="dataset-notes">
                            <p>{{ DESCRIPCIÓN DE LA HISTORIA }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</a>
```

Como puede apreciarse arriba, para agregar una historia es necesario contar con 4 elementos:

1. La URL donde está alojada la historia.
1. Título de la historia.
1. Descripción de la historia.
1. Imagen de la historia. Puede ser una URL externa o un archivo imagen, en cuyo caso debe ser subida en el repositorio del plugin en la ruta `ckanext/gcbaandinotheme/public/img/historias` y referenciadas desde el template usando la ruta `/img/historias/nombre-del-archivo.png`.

Una vez armado el _snippet_ de la historia utilizando los cuatro valores arriba mencionados, se agrega la historia al archivo `ckanext/gcbaandinotheme/templates/historias.html` en el orden deseado (las primeras aparecerán arriba de todo).

El código debe luego subirse al repositorio de código y debe realizarse la actualización del código del plugin utilizando el mismo procedimiento que se encuentra detallado en [Actualización del template dentro de Andino](#Actualización-del-template-dentro-de-Andino).

Una vez actualizado el código del plugin dentro del contenedor `portal` de Andino, los cambios se visualizarán automáticamente.
