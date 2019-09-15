<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\OfertaEmpleo;
use App\Area;
use App\Disponibilidad;
use App\Moneda;
use App\UnidadTemporal;
use App\Estado;
use App\Salario;

class EmpleosController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.basic');
    }

    public function index() 
    {
        return $this->createEmpleosData();
    }

    public function FormEmpleoBuscador() 
    {
        $form = array();
        $form['area'] = Area::select('id', 'nombre')
                                ->orderBy('nombre', 'ASC')
                                ->get();
        $form['salario'] = Salario::SALARIO_RANGOS;
        $form['disponibilidad'] = Disponibilidad::all();
        $form['moneda'] = Moneda::all();
        $form['utemporal'] = UnidadTemporal::select('id', 'nombre')
                                                ->get();
        $form['estado'] = Estado::select('id', 'nombre')
                                    ->get();

        return $form;
    }

    public function SearchEmployment(Request $request)
    {
        $post = $request->post();
        $conditions = "";

        if($post["form"]["selected_area"]) {
            $conditions .= " AND ep.area = " . $post["form"]["area"];
        }
        if($post["form"]["selected_disponibilidad"]) {
            $conditions .= " AND ep.disponibilidad = " . $post["form"]["disponibilidad"];
        }
        if($post["form"]["selected_salario"]) {
            $salario = new Salario($post["form"]["salario"]);
            $conditions .= " AND ep.salario >= " . $salario->getSalarioMinimo();
            $conditions .= " AND ep.salario <= " . $salario->getSalarioMaximo();
            $conditions .= " AND ep.salario_moneda = " . $post["form"]["moneda"];
            $conditions .= " AND ep.salario_temporal = " . $post["form"]["utemporal"];
        }
        if($post["form"]["selected_estado"]) {
            $conditions .= " AND em.estado = " . $post["form"]["estado"];
        }

        return $this->createEmpleosData($conditions);
    }

    protected function createEmpleosData($conditions="")
    {
        $data = array();

        $sql = "SELECT 
                ep.id AS id,
                em.logotipo AS imagen,
                ep.puesto AS empleo,
                ep.salario AS salario,
                ep.descripcion AS descripcion,
                ep.log AS fecha,
                mo.nombre AS moneda,
                ut.nombre AS unidad_temporal,
                et.nombre AS estado,
                cd.nombre AS ciudad
                FROM oferta_empleo AS ep
                LEFT JOIN empresa AS em ON ep.empresa = em.id
                LEFT JOIN moneda AS mo ON ep.salario_moneda = mo.id
                LEFT JOIN unidad_temporal AS ut ON ep.salario_temporal = ut.id
                LEFT JOIN estado AS et ON em.estado = et.id
                LEFT JOIN ciudad AS cd ON em.ciudad = cd.id
                WHERE ep.publicar = 1" . $conditions . " ORDER BY ep.log DESC";

        $empleos = DB::select($sql);

        foreach($empleos as $i => $empleo) {
            $data[$i]["id"] = $empleo->id;
            $data[$i]["imagen"] = $empleo->imagen;
            $data[$i]["empleo"] = $empleo->empleo;
            $data[$i]["fecha"] = $empleo->fecha;
            $data[$i]["salario"] = $empleo->salario;
            $data[$i]["descripcion"] = $empleo->descripcion;
            $data[$i]["signo"] = "$";
            $data[$i]["moneda"] = $empleo->moneda;
            $data[$i]["unidad_temporal"] = $empleo->unidad_temporal;
            $data[$i]["region"]["estado"] = $empleo->estado;
            $data[$i]["region"]["ciudad"] = $empleo->ciudad;
        }

        return $data;
    }
}
