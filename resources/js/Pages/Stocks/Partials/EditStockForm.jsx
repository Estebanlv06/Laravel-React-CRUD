import { useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'; 
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export default function EditStockForm({ producto, onClose, fetchData, showSuccess }) {
    const { data, setData, put, processing, reset, errors } = useForm({
        id: producto.id,
        bodega_id: producto.bodega_id,
        producto_id: producto.producto_id,
        stock: producto.stock,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('stocks.update', { stock: data }), {
            onSuccess: () => {
                reset();
                onClose();
                fetchData();
                showSuccess("Stock actualizado!");
            }
        });
        
    };

    return (
        <section>
            <form className="flex flex-col p-4">
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