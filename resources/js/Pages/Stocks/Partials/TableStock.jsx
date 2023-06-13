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
                    style={{ fontSize: '14px', padding: '6px 12px' }}
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
                <Column header="" body={actionTemplate} /> 
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

            <Dialog header="Eliminar Producto" visible={deleteVisible} style={{ width: '30vw' }} onHide={() => setDeleteVisible(false)}>
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
