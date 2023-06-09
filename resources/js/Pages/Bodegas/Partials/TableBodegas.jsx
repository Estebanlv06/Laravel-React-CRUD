import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import EditbodegaForm from './EditBodegaForm';
import DeleteBodega from './DeleteBodega';
import { Toast } from 'primereact/toast';

export default function TableBodegas({ bodegas }) {
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [selectedBodega, setSelectedBodega] = useState(null);

    const openEditModal = (bodega) => {
        setSelectedBodega(bodega);
        setEditVisible(true);
    };

    const openDeleteModal = (bodega) => {
        setSelectedBodega(bodega);
        setDeleteVisible(true);
    };

    const handleClose = () => {
        setEditVisible(false);
        setDeleteVisible(false);
    };

    const actionTemplate = (bodega) => {
        return (
            <div>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success"
                    onClick={() => openEditModal(bodega)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => openDeleteModal(bodega)}
                />
            </div>
        );
    };

    const showSuccess = (message) => {
        Toast.current.show({severity:'success', summary: 'Éxito', detail: message, life: 3000});
    }

    return (
        <div>

            <Toast ref={Toast} />

            <DataTable value={bodegas.map((bodega) => ({ ...bodega }))} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Nombre" />
                <Column header="Acciones" body={actionTemplate} /> 
            </DataTable>

            <Dialog header="Editar bodega" visible={editVisible} style={{ width: '50vw' }} onHide={() => setEditVisible(false)} className="max-w-3xl">
                {selectedBodega && (
                    <EditbodegaForm 
                        bodega={selectedBodega} 
                        onClose={handleClose}
                        showSuccess={showSuccess}
                    />
                )}
            </Dialog>

            <Dialog header="Eliminar bodega" visible={deleteVisible} style={{ width: '30vw' }} onHide={() => setDeleteVisible(false)} className="max-w-3xl">
                {selectedBodega && (
                    <DeleteBodega 
                        bodega={selectedBodega} 
                        onClose={handleClose} 
                        showSuccess={showSuccess}
                    />
                )}
            </Dialog>
        </div>
    );
}
