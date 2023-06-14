import { useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';

export default function DeleteBodega({ bodega, onClose, showSuccess }) {
    const { data, delete: destroy, processing, reset } = useForm({
        id: bodega.id,
        name: bodega.name,
    });

    const submit = (e) => {
        e.preventDefault();
        destroy(route('bodegas.destroy', { bodega: data.id }), {
        onSuccess: () => {
            reset();
            onClose();
            showSuccess("Bodega eliminada exitosamente!");
        },
        });
    };

    return (
        <div className="flex flex-col">
            <form>
                <p className="mb-4">¿Estás seguro que quieres eliminar el bodega? con nombre: {data.name}</p>
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
