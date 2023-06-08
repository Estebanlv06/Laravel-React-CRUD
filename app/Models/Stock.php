<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $table = 'stocks';

    protected $fillable = [
        'bodega_id',
        'producto_id',
        'stock'
    ];

    public function productos()
    {
        return $this->belongsTo(Producto::class, 'producto_id', 'id');
    }

    public function bodegas()
    {
        return $this->belongsTo(Bodega::class, 'bodega_id', 'id');
    } 
}
