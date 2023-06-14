import { useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export default function CreatedBodegaFrom({ onClose, showSuccess }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('bodegas.store'), { onSuccess: () => {
            reset();
            onClose();
            showSuccess("Bodega agregada exitosamente");
            } 
        });
    }; 

    return (
        <section>
            <header>
                <p className="mt-1 text-sm text-gray-600">
                    Agrega una bodega.
                </p>
            </header>

            <form className="mt-6 space-y-6">
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Nombre" />
                    <InputText
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        maxLength={100}
                        autoFocus
                        placeholder="Nombre Bodega"
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
                    label="Agregar"
                    severity="success"
                    outlined
                    onClick={submit}
                    disabled={processing}
                />
            </div>
        </section>
    );
}