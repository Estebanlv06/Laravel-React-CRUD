import { useEffect, useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TableStock from './Partials/TableStock';
import CreatedStockForm from './Partials/CreatedStockForm';

export default function Index({ bodegas }) {
    const [productovisible, setProductoVisible] = useState(false);
    const [noProductos, setNoProductos] = useState([]);
    const [productos, setProductos] = useState([]);
    const { data, setData } = useForm({
        id: null,
    });
    const fetchData = async () => {
        if (data.id) {
            try {
                const response = await fetch(route('stocks.show', { stock: data.id }));
                const result = await response.json();
                setProductos(result.stocks);
                setNoProductos(result.noProductos);
            } catch (error) {
                console.error('Error al obtener los datos del servidor:', error);
                setProductos([]);
                setNoProductos([]);
            }
        }
    };
    useEffect(() => {
        fetchData();     
    }, [data.id] );

    const handleClose = () => {
        fetchData(); 
        setProductoVisible(false);

    };

    const showSuccess = (message) => {
        Toast.current.show({severity:'success', summary: 'Éxito', detail: message, life: 3000});
    }

    return (
        <AuthenticatedLayout
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Stock</h2>}
        >
        <Head title="Stock" />

        <Toast ref={Toast} />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="mb-4">
                    <Dropdown
                    value={data.id}
                    onChange={(e) => setData('id', e.value)}
                    options={bodegas.map((bodega) => ({
                        label: bodega.name,
                        value: bodega.id,
                    }))}
                    required
                    placeholder={data.id ? `Bodega ${data.id}` : 'Selecciona una bodega'}
                    className="w-full md:w-14rem"
                    />
                </div>
                <div className="p-4 pb-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <div className="mt-6">

                        <TableStock
                            productos={productos}
                            fetchData={fetchData}
                        />

                    </div>
                </div>
                <div className="flex justify-between">
                    {data.id && noProductos.length > 0 && (
                        <div>
                            <Button
                            label="Agregar producto"
                            icon="pi pi-plus"
                            rounded
                            severity="success"
                            onClick={() => setProductoVisible(true)}
                            className="w-auto"
                            />
                            <Dialog
                            header="Agregar producto a bodega"
                            visible={productovisible}
                            style={{ width: '50vw' }}
                            onHide={() => setProductoVisible(false)}
                            className="max-w-3xl"
                            >
                            <CreatedStockForm
                                bodega={data.id}
                                productos={noProductos}
                                onClose={handleClose}
                                showSuccess={showSuccess}
                            />
                            </Dialog>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
