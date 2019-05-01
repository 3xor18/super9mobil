<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class compra extends Model
{
    protected $table='compra';
    protected $primaryKey='id';
    protected $fillable=['id','id_cliente','id_producto','cantidad'];
}
