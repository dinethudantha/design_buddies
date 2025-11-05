<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'discounted_price',
        'stock_quantity',
        'image_url',
        'status',
    ];
}
