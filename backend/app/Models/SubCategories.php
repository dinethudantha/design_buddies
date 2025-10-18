<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubCategories extends Model
{
    protected $fillable = [
        'sub_category',
        'slug',
        'category_id'
    ];
}
