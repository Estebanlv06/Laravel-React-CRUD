
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

        

export default function Index({ bodegas }) {

    const [bodegavisible, setBodegaVisible] = useState(false);
    
    const handleClose = () => {
        setBodegaVisible(false);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bodegas</h2>}
        >
            <Head title='Bodegas' />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 pb-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="flex justify-between">
                            <div>
                                <Button label="Agregar bodega" icon="pi pi-plus" rounded severity="success" onClick={() => setBodegaVisible(true)} className="w-auto" />
                                <Dialog header="Agrega un bodega" visible={bodegavisible} style={{ width: '50vw' }} onHide={() => setBodegaVisible(false)} className="max-w-3xl">
                                    {/* Aquí estará el contenido de un modal para agregar una bodega */}
                                </Dialog>
                            </div>
                        </div>
                        <div className="mt-6">
                            {/* Aquí estará la tabla con las bodegas */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}