<h1 align="center">CRUD Laravel-React </h1>

## Antes de comenzar

Hay algunos puntos importantes que debes tener en cuenta sobre este proyecto:

- Aunque este proyecto no está completo, se pueden realizar las acciones más importantes de un CRUD.
- La eliminación en cascada permite eliminar automáticamente todos los registros asociados en otras tablas cuando se elimina un producto. No se mostrará un mensaje específico durante este proceso, ya que la eliminación se realiza en segundo plano de manera silenciosa.
- El proyecto incluye varios archivos innecesarios que fueron instalados por Breeze, que permite una aplicación conjunta de Laravel y React en un solo archivo. Estos archivos no generan errores en la aplicación.
- En futuras actualizaciones, se agregarán comentarios en los archivos para una mejor comprensión de cada línea de código.
- La parte visual del proyecto se irá modificando con el tiempo.
- En el futuro, se creará un proyecto que contenga esta aplicación con autenticación y un inicio de sesión.


## Sobre el proyecto

Descripción del proyecto:

El sistema de gestión de inventario proporciona varias funciones para administrar eficientemente los productos y el stock en una bodega. Permite realizar diversas acciones, como el ingreso de nuevos productos al sistema, donde se pueden registrar detalles como el nombre, la descripción y el precio. Además, es posible realizar ediciones en los productos existentes, como modificar su descripción o actualizar su precio. Para mantener un control preciso, también se puede eliminar un producto del sistema si ya no es relevante.

En cuanto a las bodegas, el sistema permite ingresar nuevas bodegas. Se pueden realizar ediciones en los datos de la bodega, en este caso solo se puede editar el nombre. En caso de que una bodega ya no sea necesaria, también es posible eliminarla del sistema.

Por último, el sistema ofrece la opción de ingresar el stock disponible en una bodega en particular, lo cual es útil para realizar un seguimiento detallado de las existencias. Esto implica registrar la cantidad de cada producto almacenado en una bodega específica, así como también editar el stock o eliminar un producto de una bodega.

Tecnologías utilizadas:

El proyecto utiliza las siguientes tecnologías:

- PHP (v8.1.10)
- Laravel (v10.10)
- React (v18.2.0)
- JavaScript
- HTML5
- Tailwind (v3.2.1)
- PrimeReact (v9.5.0)
- MySQL (v8.0.30)

Otras herramientas utilizadas durante el desarrollo del proyecto:

- Composer (v2.4.1)
- Node.js (v18.8.0)
- Git (v2.37.3)
- Laragon
- Visual Studio Code
- GitHub

## Clonar el proyecto en tu computadora

Si deseas probar este proyecto en tu computadora debes tener instalados las siguientes herramientas:

- **[Composer](https://getcomposer.org/)**: Herramienta de administración de dependencias para PHP.
- **[Node.js](https://nodejs.org/es)**: Entorno de ejecución de JavaScript en el lado del servidor.
- **[Git](https://git-scm.com/)**: Sistema de control de versiones distribuido para rastrear cambios en el código fuente.
- **[Laragon](https://laragon.org/)**: Entorno de desarrollo local para proyectos PHP en Windows, que proporciona una alternativa a herramientas populares como XAMPP, WAMP, MAMP y otros.

Una vez instalados las herramientas anteriores, debes clonar este repositorio en tu computador. Sigue los siguientes pasos:

1. Copia la URL del repositorio: Haz clic en el botón "Code" en la página del repositorio (normalmente es un botón de color verde) y luego copia la URL proporcionada. Puedes elegir entre utilizar la URL HTTPS o la URL SSH, dependiendo de tus preferencias y configuraciones de autenticación.

2. Abre tu terminal o línea de comandos: Navega hasta el directorio en tu máquina donde deseas clonar el repositorio. Por ejemplo, si usas Laragon, los proyectos se guardan en una carpeta llamada "www". Sigue la siguiente secuencia: Abre cualquier carpeta, luego accede a "Este equipo", "Disco local", "laragon" (en mi caso) y entra a la carpeta "www". Borra la dirección que se muestra en la barra de ubicación y reemplázala con lo siguiente:
```
cmd
```
Esto abrirá una ventana de comando en ese directorio.

3. Ejecuta el comando de clonación: En tu terminal o línea de comandos, ejecuta el siguiente comando, reemplazando `<URL_del_repositorio>` con la URL que copiaste anteriormente. Por ejemplo, si estás utilizando la URL HTTPS, el comando se vería así:
```
git clone https://github.com/Estebanlv06/Laravel-React-CRUD.git
```
Presiona Enter para ejecutar el comando. Git comenzará a clonar el repositorio en tu máquina. Verás un mensaje que muestra el progreso de la clonación y una vez finalizado, el repositorio estará disponible localmente en el directorio especificado.

4. Abre el proyecto en Visual Studio Code: Puedes abrir el proyecto en Visual Studio Code ejecutando el siguiente comando en tu terminal o línea de comandos:
```
code .
```

5. Instala las dependencias: Abre la consola de comandos de Visual Studio Code con `Ctrl+J` y ejecuta los siguientes comandos para instalar las dependencias de PHP y Node.js (instala ambos):
```
composer install
npm install
```

6. Configura tu base de datos: Para configurar tu base de datos, haz una copia del archivo `.env.example` ejecutando el siguiente comando:
```
cp .env.example .env
```
Esto generará un archivo llamado `.env` que puedes editar para configurar el nombre de tu base de datos.

Por ejemplo, en el archivo `.env`, puedes cambiar el nombre de tu base de datos en la línea donde está `DB_DATABASE`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
7. Migración de la base de datos: Para crear la base de datos, las tablas y los atributos necesarios para el funcionamiento del proyecto, inicia MySQL. Si usas Laragon, simplemente haz clic en el botón "Iniciar". Una vez iniciados los servicios, ejecuta el siguiente comando para migrar las tablas del proyecto:
```
php artisan migrate
```
Si todo ha ido bien, podrás utilizar el proyecto en tu computadora local. Asegúrate de tener los servicios de MySQL y el servidor web en funcionamiento a través de Laragon. Además, verifica que los componentes de React estén compilados ejecutando el siguiente comando:
```
npm run dev
```
Después, ejecuta el servidor de desarrollo de Laravel para probar el proyecto en tu máquina local utilizando el siguiente comando:
```
php artisan serve
```
Si la consola muestra el mensaje `INFO Server running on [http://127.0.0.1:8000].`, puedes hacer clic con el botón derecho mientras presionas la tecla `Ctrl` en la dirección `http://127.0.0.1:8000` para abrir el proyecto en tu navegador predeterminado.

Con estos pasos debería funcionar el proyecto en tu computador.


## Tablas y atributos:

La siguiente imagen muestra el modelo para la base de datos de este proyecto:

![Modelo BD](/public/images/modelo-bd.PNG)

La descripción de las tablas "bodegas", "productos" y "stocks" con sus respectivos atributos:

1. Tabla "bodegas":

    - id: Identificador único de la bodega (entero).
    - name: Nombre de la bodega (cadena).
    - created_at: Fecha y hora de creación del registro de la bodega.
    - updated_at: Fecha y hora de la última actualización del registro de la bodega.

2. Tabla "productos":

    - id: Identificador único del producto (entero).
    - name: Nombre del producto (cadena).
    - description: Descripción del producto (cadena).
    - price: Precio del producto (decimal).
    - created_at: Fecha y hora de creación del registro del producto.
    - updated_at: Fecha y hora de la última actualización del registro del producto.

3. Tabla "stocks":

    - id: Identificador único del stock (entero).
    - bodega_id: ID de la bodega asociada al stock (entero).
    - producto_id: ID del producto asociado al stock (entero).
    - stock: Cantidad de productos en stock (entero).
    - created_at: Fecha y hora de creación del registro del stock.
    - updated_at: Fecha y hora de la última actualización del registro del stock.

## Imagenes del proyecto

Vista Inicio:

![Modelo BD](/public/images/inicio.PNG)

Vista Bodega:

![Modelo BD](/public/images/bodegas.PNG)

Vista Producto:

![Modelo BD](/public/images/productos.PNG)

Vista Stock sin seleccionar una bodega:

![Modelo BD](/public/images/stocks-sin-bodega.PNG)

Vista Stock con bodega sin productos:

![Modelo BD](/public/images/stocks-productosnada-bodega.PNG)

Vista Stock con bodega con algunos productos:

![Modelo BD](/public/images/stocks-productosalgunos-bodega.PNG)

Vista Stock con bodega con todos los productos:

![Modelo BD](/public/images/stocks-productostodos-bodega.PNG)

## Próximas actualizaciones

- Filtros para bodegas y productos.
- Alerta en caso de eliminación en cascada.
- Cambio de logo.
