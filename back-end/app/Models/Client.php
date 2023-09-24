<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Client extends Authenticatable
{
    use HasFactory;
    //use HasApiTokens, Notifiable;

    //protected $table = 'clients';
    protected $fillable = [
        'firstname',
        'lastname',
        'adress',
        'password',
        'email',
        'phone_number',
    ];
}
