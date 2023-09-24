<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/addClient', [ClientController::class, 'store']);
Route::post('/login', [UserLogin::class, 'connect']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
