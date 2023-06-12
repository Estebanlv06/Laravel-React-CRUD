import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import DeleteStock from './DeleteStock';
import EditStockForm from './EditStockForm';
import { Toast } from 'primereact/toast';


export default function TableStock({ productos, fetchData }) {
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [selectedStock, setselectedStock] = useState(null);

    const openEditModal = (producto) => {
        setselectedStock(producto);
        setEditVisible(true);
    };

    const openDeleteModal = (producto) => {
        setselectedStock(producto);
        setDeleteVisible(true);
    };

    const handleClose = () => {
        setEditVisible(false);
        setDeleteVisible(false);
        fetchData();
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
                <Column field="name" header="Nombre Producto" />
                <Column field="description" header="Descripcion" />
                <Column field="price" header="Precio" />
                <Column field="stock" header="Stock" />
                <Column header="Acciones" body={actionTemplate} /> 
            </DataTable>

            <Dialog header="Editar Producto" visible={editVisible} style={{ width: '50vw' }} onHide={() => setEditVisible(false)} className="max-w-3xl">
                {selectedStock && (
                    <EditStockForm 
                        producto={selectedStock}
                        onClose={handleClose}
                        fetchData={fetchData}
                        showSuccess={showSuccess}
                    />
                )}
            </Dialog>

            <Dialog header="Eliminar Producto" visible={deleteVisible} style={{ width: '20vw' }} onHide={() => setDeleteVisible(false)}>
                {selectedStock && (
                    <DeleteStock
                        producto={selectedStock} 
                        onClose={handleClose} 
                        fetchData={fetchData}
                        showSuccess={showSuccess}
                    />
                )}
            </Dialog>
        </div>
    );
}
