<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
  protected $table='sale';
  protected $primaryKey='sale_id';
  protected $fillable=['name','email','address','shipping','total','subtotal','taxes'];
}
