<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'path',
        'type',
        'service_id',
    ];

    public function mediaUrl()
    {
        return Storage::disk('public')->url($this->path);
    }
}
