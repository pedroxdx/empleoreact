<?php

use Illuminate\Http\Request;
use App\OfertaEmpleo;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::middleware('auth:api')->group(function(){
    
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});
    

/* Empresa */

Route::get("/empresa/{id}", "EmpleoController@empresaById");

Route::get("/empresa/{id}/empleos", "EmpleoController@employmentByCompany");

Route::get("/empresa/{id}/ciudades", "EmpleoController@ciudadesByEmpresa");


/* Oferta de Empleos */

Route::get('/empleos', 'EmpleoController@index');

Route::get("/empleo/{id}", "EmpleoController@employmentById");

Route::get('/form-empleo-buscador', 'EmpleoController@FormEmpleoBuscador');

Route::post('/buscar-empleo', 'EmpleoController@SearchEmployment');


/* Login Empresa */

Route::post('/login', 'UserController@login');

Route::post('/register-user', 'UserController@register');


