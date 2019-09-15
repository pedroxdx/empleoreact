<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OfertaEmpleo extends Model
{
    protected $table = "oferta_empleo";
    
    public $timestamps = false;

    public function empresaFK()
    {
        return $this->hasOne('App\Empresa', 'id', 'empresa');
    }

    public function monedaFK()
    {
        return $this->hasOne('App\Moneda', 'id', 'salario_moneda');
    }

    public function disponibilidadFK()
    {
        return $this->hasOne('App\Diponibilidad', 'id', 'disponibilidad');
    }

    public function utemporalFK()
    {
        return $this->hasOne('App\UnidadTemporal', 'id', 'salario_temporal');
    }

}
