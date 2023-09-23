<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'firstname',
        'lastname',
        'adress',
        'password',
        'email',
        'phone_number',
    ];
}