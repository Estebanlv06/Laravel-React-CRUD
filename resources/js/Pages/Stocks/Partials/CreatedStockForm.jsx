import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import React from 'react';

export default function CreatedStockFrom({ bodega, productos, onClose, showSuccess }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        bodega_id: bodega,
        producto_id: '',
        stock: 0
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('stocks.store'), {
        onSuccess: () => {
            reset();
            onClose();
            showSuccess("Producto agregado a la bodega exitosamente!");
        }
        });
    }; 

    return (
    <section>
        <header>
            <p className="mt-1 text-sm text-gray-600">Agrega un producto a la bodega</p>
        </header>

        <form className="flex flex-col p-4">
            <div className="mb-4">
                <InputLabel htmlFor="productos" value="Productos" />
                <Dropdown
                    value={data.producto_id}
                    onChange={(e) => setData('producto_id', e.value)}
                    options={productos.map((producto) => ({
                        label: producto.name,
                        value: producto.id,
                    }))}
                    required
                    placeholder={data.producto_id ? `Bodega ${data.producto_id}` : 'Selecciona un producto'}
                    className="w-full md:w-14rem"
                />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="stock" value="Stock" />
                <InputText
                    id="stock"
                    value={data.stock}
                    onChange={(e) => setData('stock', e.target.value)}
                    maxLength={7}
                    className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <InputError message={errors.stock} className="mt-2 text-red-500" />
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
