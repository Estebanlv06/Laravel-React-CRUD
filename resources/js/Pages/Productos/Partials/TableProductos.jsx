import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import EditProductoForm from './EditProductoForm';
import DeleteProducto from './DeleteProducto';

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
                    rounded 
                    severity="warning" 
                    className="p-button-rounded p-button-success p-button-sm"
                    onClick={() => openEditModal(producto)}
                />
                <span className="mr-2"></span>
                <Button 
                    icon="pi pi-trash" 
                    rounded 
                    severity="danger" 
                    className="p-button-rounded p-button-danger p-button-sm"
                    size="small"
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
                <Column header="" body={actionTemplate} /> 
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
