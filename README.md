<p align="center"><a href="https://laravel.com" target="_blank"><h1 width="400">CRUD Laravel-React</h1></a></p>

CRUD Laravel-React

## Antes de comenzar

Hay algunos puntos importantes que debes tener en cuenta sobre este proyecto:

- Aunque este proyecto no está completo, se pueden realizar las acciones más importantes de un CRUD.
- La eliminación en cascada no está disponible actualmente. Por ejemplo, si deseas eliminar un producto que está en una bodega, la aplicación mostrará un error (actualmente este error no está controlado).
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

- PHP
- Laravel
- React
- JavaScript
- HTML5
- Tailwind
- PrimeReact
- MySQL

Otras herramientas utilizadas durante el desarrollo del proyecto:

- Laragon
- Visual Studio Code
- GitHub

Herramientas necesarias antes de comenzar el proyecto:

Antes de iniciar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

- Composer
- Node.js
- Git
- Laragon


## Clonar el proyecto en tu computadora

Si deseas probar este proyecto en tu computadora, sigue estos pasos para clonar el repositorio:

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

7. Configura tu base de datos: Para configurar tu base de datos debes hacer una copia del archivo .env.example, lo puedes realizar ejecutando la siguiente línea de comando:
```
cp .env.example .env
```
Esto generará un archivo llamado .env, en este archivo puedes editar el nombre de tu base de datos que se generará al realizar las migraciones.

Por ejemplo, en el archivo ".env", en la line donde esta DB_DATABASE puedes cambiar el nombre de tu base de datos:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
8. Construye tus tablas y atributos: Para crear tu base de datos, tablas y atributos (necesarios para el funcionamiento del proyecto), debes iniciar MySQL, en mi caso como uso Laragon solo debo abrir la aplicación y hacer click en el botón "Iniciar", este se encargará de iniciar un servidor web y el servicio de MySQL. Una vez iniciado los servicios se deben migrar las tablas del proyecto con el siguiente comando:
```
php artisan migrate
```
9. Si todo sale bien, ya podrás usar el proyecto en tu computadora de forma local, debes tener corriendo los servicios de MySQL y el servidor Web, a través de Laragon. Además, debes tener compilado los componentes de React con el siguiente comando:
```
npm run dev
```
Y por último, debes ejecutar el servidor de desarrollo de Laravel para probar el proyecto en tu máquina local. Utiliza el siguiente comando:
```
php artisan serve
```

Con estos pasos debería funcionar el proyecto en tu computador.


## Tablas y atributos:

La siguiente imagen muestra el modelo para la base de datos de este proyecto:


