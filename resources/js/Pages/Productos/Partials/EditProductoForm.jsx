import { Button } from 'primereact/button';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { InputText } from 'primereact/inputtext'; 
import { InputTextarea } from 'primereact/inputtextarea'; 
import { useForm } from '@inertiajs/react';

export default function EditProductoForm({ producto, onClose, showSuccess }) {
    const { data, setData, put, processing, reset, errors } = useForm({
        id: producto.id,
        name: producto.name,
        description: producto.description,
        price: producto.price,
    });

    const submit = (e) => {
        e.preventDefault();
        // Utiliza el método PUT para actualizar el producto
        put(route('productos.update', { producto: data }), {
        onSuccess: () => {
            reset();
            onClose();
            showSuccess("Producto actualizado!");
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
                <div className="mb-4">
                    <InputLabel htmlFor="description" value="Descripción" />
                    <InputTextarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        maxLength={500}
                        rows={5}
                        className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <InputError message={errors.description} className="mt-2 text-red-500" />
                <div className="mb-4">
                    <InputLabel htmlFor="price" value="Precio" />
                    <InputText
                        id="price"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        required
                        maxLength={10}
                        className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <InputError message={errors.price} className="mt-2 text-red-500" />
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