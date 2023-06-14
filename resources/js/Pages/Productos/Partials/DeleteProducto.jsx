import { useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';

export default function DeleteProducto({ producto, onClose, showSuccess }) {
    const { data, delete: destroy, processing, reset } = useForm({
        id: producto.id,
        name: producto.name,
    });

    const submit = (e) => {
        e.preventDefault();
        destroy(route('productos.destroy', { producto: data.id }), {
        onSuccess: () => {
            reset();
            onClose();
            showSuccess("Producto eliminado!");
        },
        });
    };

    return (
        <div className="flex flex-col">
            <form>
                <p className="mb-4">¿Estás seguro que quieres eliminar el producto? con nombre: {data.name}</p>
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
