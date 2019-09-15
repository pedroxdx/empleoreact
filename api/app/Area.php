<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = 'area';
    
    public $timestamps = false;

    public function sectorFK()
    {
        return $this->hasOne('App\Sector', 'id', 'sector');
    }

}
