import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

export default function Dashboard({ }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Inicio</h2>}
        >
            <Head title="Inicio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card title="Descripción">
                        <p className="m-0">El sistema de gestión de inventario proporciona varias funciones para administrar eficientemente los productos y el stock en una bodega. Permite realizar diversas acciones, como el ingreso de nuevos productos al sistema, donde se pueden registrar detalles como el nombre, la descripción y el precio. Además, es posible realizar ediciones en los productos existentes, como modificar su descripción o actualizar su precio. Para mantener un control preciso, también se puede eliminar un producto del sistema si ya no es relevante.</p>
                        <p className="m-1">En cuanto a las bodegas, el sistema permite ingresar nuevas bodegas. Se pueden realizar ediciones en los datos de la bodega, en este caso solo se puede editar el nombre. En caso de que una bodega ya no sea necesaria, también es posible eliminarla del sistema.</p>
                        <p className="m-1">Por último, el sistema ofrece la opción de ingresar el stock disponible en una bodega en particular, lo cual es útil para realizar un seguimiento detallado de las existencias. Esto implica registrar la cantidad de cada producto almacenado en una bodega específica, así como también editar el stock o eliminar un producto de una bodega.</p>
                        <p className="mt-4"><strong>IMPORTANTE aclarar que la aplicación no realiza eliminación en cascada, por lo que aparecerá un error no controlable.</strong></p>


                    </Card>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <Card title="Modelo Base de datos">
                        <p className="m-0">El modelo para la BD esta compuesto por las tablas bodegas, productos y stocks, como se ve en la siguente imagen:</p>
                        <Image src="/images/modelo-bd.PNG" alt="Image" width="1000" />
                    </Card>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <Card title="Proximas actualizaciones">
                        <p class="m-0">1. Mejoras en la parte visual.</p>
                        <p class="mt-1">2. Se agregará la eliminación en cascada con una alerta antes de eliminar.</p>
                        <p class="mt-1">3. Nuevos atributos y funciones, por ejemplo, límite de almacenamiento según la bodega.</p>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
