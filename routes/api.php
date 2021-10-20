<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/product', 'App\Http\Controllers\ProductController@create');
Route::put('/product/{id}', 'App\Http\Controllers\ProductController@update');
Route::put('/product/incrementCount/{id}', 'App\Http\Controllers\ProductController@incrementCount');
Route::put('/product/incrementLike/{id}', 'App\Http\Controllers\ProductController@incrementLike');
Route::delete('/product/{id}', 'App\Http\Controllers\ProductController@delete');


