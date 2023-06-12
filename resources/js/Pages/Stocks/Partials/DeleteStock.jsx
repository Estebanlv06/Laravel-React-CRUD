import { Button } from 'primereact/button';
import { useForm } from '@inertiajs/react';

export default function DeleteStock({ producto, onClose, fetchData, showSuccess }) {
    const { data, delete: destroy, processing, reset } = useForm({
        id: producto.id,
        bodega_id: producto.bodega_id,
        producto_id: producto.producto_id,
        stock: producto.stock,
    });
    console.log(data.id);
    const submit = (e) => {
        e.preventDefault();
        destroy(route('stocks.destroy', { stock: data }), {
        onSuccess: () => {
            reset();
            onClose();
            fetchData();
            showSuccess("Producto de la bodega eliminado!");
            
        },
        });
    };

    return (
        <div className="flex flex-col">
            <form>
                <p className="mb-4">¿Estás seguro que quieres eliminar el producto? con nombre: {producto.name}</p>
            </form>
            <div className="flex justify-between">
                <Button
                    label="Cancelar"
                    outlined
                    onClick={onClose}
                />
                <Button
                    label="Eliminar"
                    severity="danger"
                    outlined
                    onClick={submit}
                    disabled={processing}
                />
            </div>
        </div>
    );
}