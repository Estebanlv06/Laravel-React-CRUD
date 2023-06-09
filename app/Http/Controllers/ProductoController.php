<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductoController extends Controller
{
    public function index()
    {
        return Inertia::render('Productos/Index', [
            'productos' => Producto::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'price' => 'required|numeric|max:10000',
        ]);

        $producto = new Producto();
        $producto->name = $validated['name'];
        $producto->description = $validated['description'];
        $producto->price = $validated['price'];
        $producto->save();

        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);
        $producto->name = $request->name;
        $producto->description = $request->description;
        $producto->price = $request->price;
        $producto->save();

        return redirect()->back();
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();

        return redirect()->back();
    }
}
