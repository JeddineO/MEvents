<?php

use App\Http\Controllers\Provider\AuthController;
use App\Http\Controllers\Provider\ProviderController;
use App\Http\Controllers\Provider\ServiceController;
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

Route::post('/provider/login', [AuthController::class, 'authenticate']);
Route::post('/provider/create', [ProviderController::class, 'store']);
Route::get('/provider/show/{provider}', [ProviderController::class, 'show'])->middleware('provider');

Route::get('/provider/services', [ServiceController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
