import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import EditProductoForm from './EditProductoForm';
import DeleteProducto from './DeleteProducto';
import { Toast } from 'primereact/toast';

export default function TableProductos({ productos }) {
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [selectedProducto, setselectedProducto] = useState(null);

    const openEditModal = (producto) => {
        setselectedProducto(producto);
        setEditVisible(true);
    };

    const openDeleteModal = (producto) => {
        setselectedProducto(producto);
        setDeleteVisible(true);
    };

    const handleClose = () => {
        setEditVisible(false);
        setDeleteVisible(false);
    };

    const actionTemplate = (producto) => {
        return (
            <div>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success"
                    onClick={() => openEditModal(producto)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => openDeleteModal(producto)}
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
            
            <DataTable value={productos} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Nombre" />
                <Column field="description" header="Descripción" />
                <Column field="price" header="Precio" />
                <Column header="Acciones" body={actionTemplate} /> 
            </DataTable>

            <Dialog header="Editar Producto" visible={editVisible} style={{ width: '50vw' }} onHide={() => setEditVisible(false)} className="max-w-3xl">
                {selectedProducto && (
                    <EditProductoForm 
                        producto={selectedProducto}
                        onClose={handleClose}
                        showSuccess={showSuccess}
                    />
                )}
            </Dialog>

            <Dialog header="Eliminar Producto" visible={deleteVisible} style={{ width: '30vw' }} onHide={() => setDeleteVisible(false)}>
                <DeleteProducto 
                    producto={selectedProducto} 
                    onClose={handleClose} 
                    showSuccess={showSuccess}
                />
            </Dialog>
        </div>
    );
}
