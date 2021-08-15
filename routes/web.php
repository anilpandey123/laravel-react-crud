<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::resource("contact",ContactController::class);
Route::get('/contact/edit/{id}',[ContactController::class,'edit'])->name("edit");
Route::patch("/contact/update/{id}",[ContactController::class,'update'])->name("update");
Route::delete('delete/{id}',[ContactController::class,'delete'])->name("delete");
Route::get('view/{id}',[ContactController::class,'viewData'])->name("view");