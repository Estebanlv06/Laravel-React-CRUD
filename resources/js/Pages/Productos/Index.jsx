import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreatedProductoForm from './Partials/CreatedProductoForm';
import TableProductos from './Partials/TableProductos';

export default function Index({ productos }) {

    const [productovisible, setProductoVisible] = useState(false);
    

    const handleClose = () => {
        setProductoVisible(false);
    };

    const showSuccess = (message) => {
        Toast.current.show({severity:'success', summary: 'Éxito', detail: message, life: 3000});
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Productos</h2>}
        >
        <Head title='Productos' />

        <Toast ref={Toast} />
        
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 pb-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <Button label="Agregar producto" icon="pi pi-plus" rounded severity="success" onClick={() => setProductoVisible(true)} className="w-auto" />
                            <Dialog header="Agrega un producto" visible={productovisible} style={{ width: '50vw' }} onHide={() => setProductoVisible(false)} className="max-w-3xl">
                                <CreatedProductoForm  
                                    onClose={handleClose}
                                    showSuccess={showSuccess}
                                />
                            </Dialog>
                        </div>
                    </div>
                    <div className="mt-6">
                        <TableProductos 
                            productos={productos}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
    );
}