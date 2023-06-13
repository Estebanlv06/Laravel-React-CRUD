import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import React from 'react';

export default function CreatedProductoFrom({ onClose, showSuccess }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        description: '',
        price: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('productos.store'), {
        onSuccess: () => {
            reset();
            onClose();
            showSuccess("Producto agregado exitosamente!");
        }
        });
    }; 

    return (
    <section>
        <header>
            <p className="mt-1 text-sm text-gray-600">Agrega un producto</p>
        </header>

        <form className="flex flex-col p-4">
            <div className="mb-4">
                <InputLabel htmlFor="name" value="Nombre" />
                <InputText
                    id="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                    autoFocus
                    placeholder="Nombre Producto"
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
                    placeholder="Descripción"
                    rows={5}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <InputError message={errors.description} className="mt-2 text-red-500" />
            <div className="mb-4">
                <InputLabel htmlFor="price" value="Precio" />
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputText
                        id="price"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
            <InputError message={errors.price} className="mt-2 text-red-500" />
        </form>
        <div className="flex justify-between mt-4">
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
