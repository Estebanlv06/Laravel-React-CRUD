<?php

namespace App\Http\Controllers;

use App\Models\Bodega;
use App\Models\Producto;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StockController extends Controller
{
    public function index()
    {
        return Inertia::render('Stocks/Index', [
            'bodegas' => Bodega::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'bodega_id' => 'required|numeric',
            'producto_id' => 'required|numeric',
            'stock' => 'required|numeric|max:10000',
        ]);

        $stock = new Stock();
        $stock->bodega_id = $validated['bodega_id'];
        $stock->producto_id = $validated['producto_id'];
        $stock->stock = $validated['stock'];
        $stock->save();
        return redirect()->back();
    }

    public function show(Request $request, $stock)
    {
        
        $stocks = Stock::where('bodega_id', $stock)->get();
        
        $existingStocks = $stocks->map(function ($stock) {
            $stock->name = $stock->productos->name;
            $stock->description = $stock->productos->description;
            $stock->price = $stock->productos->price;
            return $stock;
        });
        
        $allProducts = Producto::whereNotIn('id', $stocks->pluck('producto_id'))->get();
        
        if ($existingStocks->isEmpty()) {
            $allProducts = Producto::all();
            if($allProducts->isEmpty()){
                return [
                    'message' => 'No se encontraron productos en la bodega ni tampoco se encontraron productos para agregar',
                    'stocks' => [],
                    'noProductos' => []
                ]; 
            }
            
            return [
                'message' => 'No se encontraron productos para la bodega especificada',
                'stocks' => [],
                'noProductos' => $allProducts
            ]; 
        }
        
        return [
            'stocks' => $existingStocks,
            'noProductos' => $allProducts
        ]; 
    }

    public function update(Request $request, $id)
    {
        $stock = Stock::find($id);
        $stock->stock = $request->stock;
        $stock->save();
        return redirect()->back();
    }

    public function destroy(Stock $stock)
    {
        $stock->delete();
        return redirect()->back();
    }
}
