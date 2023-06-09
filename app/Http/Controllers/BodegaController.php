<?php

namespace App\Http\Controllers;

use App\Models\Bodega;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BodegaController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Bodegas/Index', [
            //Mientras no se tenga la bd esto estará comentado
            /* 'bodegas' => Bodega::all(), */
            'bodegas' => [],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $bodega = new Bodega();
        $bodega->name = $validated['name'];
        $bodega->save();

        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $bodega = Bodega::find($id);
        $bodega->name = $request->name;
        $bodega->save();

        return redirect()->back();
    }

    public function destroy(Bodega $bodega)
    {
        $bodega->delete();

        return redirect()->back();
    }
}
