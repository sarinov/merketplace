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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', 'App\Http\Controllers\UserController@login');
Route::post('/registration', 'App\Http\Controllers\UserController@registration');


Route::middleware('auth_token')->post('/product', 'App\Http\Controllers\ProductController@create');
Route::middleware('auth_token')->put('/product/{id}', 'App\Http\Controllers\ProductController@update');
Route::middleware('auth_token')->put('/product/incrementCount/{id}', 'App\Http\Controllers\ProductController@incrementCount');
Route::middleware('auth_token')->put('/product/incrementLike/{id}', 'App\Http\Controllers\ProductController@incrementLike');
Route::middleware('auth_token')->put('/product/decrementDisLike/{id}', 'App\Http\Controllers\ProductController@decrementDisLike');
Route::middleware('auth_token')->delete('/product/{id}', 'App\Http\Controllers\ProductController@delete');
Route::middleware('auth_token')->get('/filtration', 'App\Http\Controllers\ProductController@filtration');


