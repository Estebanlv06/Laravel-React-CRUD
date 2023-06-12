<p align="center"><a href="https://laravel.com" target="_blank"><h1 width="400">CRUD Laravel-React</h1></a></p>

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


## Antes de empezar

Si deseas probar este proyecto en tu computador debes tener instalados las siguientes herramientas:
- **[Composer](https://getcomposer.org/)**: Aquí va algo.
- **[Node.js](https://nodejs.org/es)**: Aquí va algo.
- **[Git](https://git-scm.com/)**: Aquí va algo.
- **[Laragon](https://laragon.org/)**: Aquí va algo.

Una vez instalados las herramientas anteriores, debes clonar este repositorio en tu computador. Sigue los siguentes pasos:

1. Copia la URL del repositorio: Haz clic en el botón "Code" en la página del repositorio (normalmente es un boton de color verde) y luego copia la URL proporcionada. Puedes elegir entre utilizar la URL HTTPS o la URL SSH, dependiendo de tus preferencias y configuraciones de autenticación.
2. Abre tu terminal o línea de comandos: Navega a la ubicación del directorio en tu máquina donde deseas clonar el repositorio, por ejemplo, en mi caso uso Laragon, los proyectos se guardan en una carpeta de laragon llamada "www". Sigue la siguente secuencia: Abre cualquier carpeta, entra a "Este equipo", Disco local, laragon (en mi caso) y entra a la carpeta "www", borra la direccion que sale en la ruta de ubicacion, y colocas lo siguiente:
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
7. Configura tu base de datos: Para configurar tu base de datos debes hacer una copia del archivo .env.example, lo puedes realizar ejecutando la siguiente linea de comando:
```
cp .env.example .env
```
Esto generara un archivo llamado .env, en este archivo puedes 



## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
