<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'provider_id'
    ];

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }

    public function medias()
    {
        return $this->hasMany(Media::class);
    }
}
