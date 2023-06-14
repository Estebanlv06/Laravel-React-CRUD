import { useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'; 
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export default function EditBodegaForm({ bodega, onClose, showSuccess }) {
    const { data, setData, put, processing, reset, errors } = useForm({
        id:bodega.id,
        name: bodega.name,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('bodegas.update', { bodega: data }), {
        onSuccess: () => {
            reset();
            onClose();
            showSuccess("La bodega se actualizo");
        }
        });
    };

    return (
        <section>
            <form className="flex flex-col p-4">
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Nombre" />
                    <InputText
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        maxLength={100}
                        autoFocus
                        className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <InputError message={errors.name} className="mt-2 text-red-500" />
            </form>
            <div className="flex items-center justify-center space-x-4">
                <Button
                    label="Cancelar"
                    outlined
                    onClick={onClose}
                />
                <Button
                    label="Guardar"
                    severity="success"
                    outlined
                    onClick={submit}
                    disabled={processing}
                />
            </div>
        </section>
    );
}