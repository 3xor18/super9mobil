<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table='product';
    protected $primaryKey='product_id';
    protected $fillable=['name','description','image','price','weight','categoria'];
}
