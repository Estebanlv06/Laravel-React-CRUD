<p align="center"><a href="https://laravel.com" target="_blank"><h1 width="400">CRUD Laravel-React</h1></a></p>

## Antes de empezar

Algunos puntos importantes sobre este proyecto:

- Si bien, este proyecto no está completo, se pueden realizar las acciones más importantes de un CRUD.
- La eliminación en cascada no está disponible, por lo que si se desea eliminar, por ejemplo, un producto que está en una bodega, la aplicación mostrará un error (por ahora este error no es controlado).
- El proyecto contiene varios archivos innecesarios que fueron instalados por breeze, que permite una aplicación Laravel y React conjunta (en un solo archivo). Estos archivos no generan errores en la aplicación.
- En próximas actualizaciones, se comentarán los archivos para un mejor entendimiento de lo que se está haciendo en cada línea de código.
- La parte visual del proyecto irá cambiando.
- A futuro se creará un proyecto que contendrá esta aplicación pero con autenticación y un login.

## Sobre el proyecto

Descripción del proyecto:

El sistema de gestión de inventario proporciona una variedad de funciones para administrar eficientemente los productos y las existencias en una bodega. Permite realizar diversas acciones, como el ingreso de nuevos productos al sistema, donde se pueden registrar detalles como nombre, descripción y precio. Además, es posible realizar ediciones sobre los productos existentes, como modificar su descripción o actualizar su precio. Para mantener un control preciso, también se puede eliminar un producto del sistema si ya no es relevante.

En cuanto a las bodegas, el sistema permite ingresar nuevas bodegas. Se pueden realizar ediciones en los datos de la bodega, en este caso solo se puede editar el nombre. En caso de que una bodega ya no sea necesaria, también es posible eliminarla del sistema.

Por último, el sistema ofrece la opción de ingresar el stock disponible en una bodega en particular, lo cual es útil para mantener un seguimiento detallado de las existencias. Esto implica registrar la cantidad de cada producto almacenado en una bodega específica, así como también editar el stock o eliminar un producto en una bodega.

Las tecnologías que se utilizaron en este proyecto son:

- PHP.
- Laravel.
- React.
- JavaScript.
- HTML5.
- Tailwind.
- PrimeReact.
- MySQL.

Otras tecnologías utilizadas durante el desarrollo del proyecto:

- Laragon.
- Visual Studio Code.
- GitHub.

Herramientas necesarias antes de empezar el proyecto:

- Composer.
- Node.js.
- Git.


## Clonar el proyecto en tu computador

Si deseas probar este proyecto en tu computador debes tener instalados las siguientes herramientas:
- **[Composer](https://getcomposer.org/)**: Aquí va algo.
- **[Node.js](https://nodejs.org/es)**: Aquí va algo.
- **[Git](https://git-scm.com/)**: Aquí va algo.
- **[Laragon](https://laragon.org/)**: Aquí va algo.

Una vez instalados las herramientas anteriores, debes clonar este repositorio en tu computador. Sigue los siguientes pasos:

1. Copia la URL del repositorio: Haz clic en el botón "Code" en la página del repositorio (normalmente es un boton de color verde) y luego copia la URL proporcionada. Puedes elegir entre utilizar la URL HTTPS o la URL SSH, dependiendo de tus preferencias y configuraciones de autenticación.
2. Abre tu terminal o línea de comandos: Navega a la ubicación del directorio en tu máquina donde deseas clonar el repositorio, por ejemplo, en mi caso uso Laragon, los proyectos se guardan en una carpeta de laragon llamada "www". Sigue la siguiente secuencia: Abre cualquier carpeta, entra a "Este equipo", Disco local, laragon (en mi caso) y entra a la carpeta "www", borra la direccion que sale en la ruta de ubicación, y colocas lo siguiente:
```
cmd
```
3. Ejecuta el comando de clonación: En tu terminal o línea de comandos, ejecuta el siguiente comando, reemplazando <URL_del_repositorio> con la URL que copiaste anteriormente:
Por ejemplo, si estás utilizando la URL HTTPS, el comando se vería así:
```
git clone https://github.com/Estebanlv06/Laravel-React-CRUD.git
```
4. Presiona Enter para ejecutar el comando. Git comenzará a clonar el repositorio en tu máquina. Verás un mensaje que muestra el progreso de la clonación y una vez finalizado, el repositorio estará disponible localmente en el directorio especificado.

5. Puedes usar el siguiente comando para abrir el proyecto en VSC:
```
code .
```
6. Puedes abrir la consola de comando de VSC con ctrl+j: una vez abierto la consola de VSC puedes instalar las dependencias de PHP y Node.js con los siguientes comandos (instalar ambos):
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


