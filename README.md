# ckanext-gobar-theme

Repositorio oficial del portal de datos abiertos de la Ciudad de Buenos Aires ([BA Data](http://data.buenosaires.gob.ar/)). Funciona como extensión de [CKAN](http://ckan.org/), el cual contiene una interfaz personalizada del template original.

- [Instalación](#instalaci%C3%B3n)
- [Estructura de archivos](#estructura-de-archivos)
- [Créditos](#cr%C3%A9ditos)

| Versiones compatibles de CKAN |
|-------------------------------|
| 2.9                           |
| 2.10                          |
| 2.11                          |

## Instalación

### From Source

1. Instalar paquete:

    ```sh
    pip install https://github.com/datosgcba/ckanext-gobar-theme.git
    ```

2. Agregar `gobar_theme` en la línea `ckan.plugins` dentro del archivo de configuración de ckan.

3. Reiniciar servicio de ckan.

### Docker

Usar proyecto base de `ckan` implementado con docker [datosgcba/ckan-docker](https://github.com/datosgcba/ckan-docker/tree/ckan-2.11).


### Estructura de archivos

```
- ckanext
    - gobar_theme
        - asset
            - js
                - archivos de js a ser importados por los distintos templates html
            - styles
                - archivos css generados desde sus versiones de scss
        - public
            - assets estáticos y públicos como imagenes y fuentes
        - templates
            - archivos de jinja renderizados por los controladores
        - actions.py # lógica de modelos de ckan, sobreescribe y/o extiende la lógica de ckan
        - controller.py # controladores para la home y la api, sobreescriben y/o extienden la lógica de ckan
        - helpers.py # metodos auxiliares para renderizado de templates
        - package_controller.py # controlador de lógica de datasets y recursos, sobreescribe y/o extiende la lógica de ckan
        - plugin.py # archivo que registra el repositorio como extensión de ckan y declara acciones, helpers y ruteo
```

## Créditos

Este proyecto está basado en [CKAN](https://github.com/ckan/ckan) y en la [guia para crear extensiones](http://docs.ckan.org/en/latest/extensions/tutorial.html).
