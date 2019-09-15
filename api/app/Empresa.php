<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    protected $table = 'empresa';
    
    public $timestamps = false;

    public function estadoFK()
    {
        return $this->hasOne('App\Estado', 'id', 'estado');
    }

    public function ciudadFK()
    {
        return $this->hasOne('App\Ciudad', 'id', 'ciudad');
    }

}
