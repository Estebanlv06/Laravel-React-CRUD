<?php

use App\Http\Controllers\BodegaController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard'); 

Route::resource('/bodegas', BodegaController::class)->only(['index', 'store', 'update', 'destroy'])->names('bodegas');

Route::resource('/productos', ProductoController::class)->only(['index', 'store', 'update', 'destroy'])->names('productos');

Route::resource('/stocks', StockController::class)->only(['index', 'store', 'show', 'update', 'destroy'])->names('stocks');