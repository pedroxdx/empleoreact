<?php

namespace App;

class Salario {

    private $salario;

    public function __construct($salario) {
        $this->salario = $salario;
    }

    const SALARIO_RANGOS = [
        ["id" => 1, "nombre" => "0 - $100"],
        ["id" => 2, "nombre" => "$100 - $200"],
        ["id" => 3, "nombre" => "$200 - $300"],
        ["id" => 4, "nombre" => "$300 - $500"],
        ["id" => 5, "nombre" => "$500 - $1,000"],
        ["id" => 6, "nombre" => "$1,000 - $2,000"],
        ["id" => 7, "nombre" => "$2,000 - $3,000"],
        ["id" => 8, "nombre" => "$3,000 - $5,000"],
        ["id" => 9, "nombre" => "$5,000 - $10,000"],
        ["id" => 10, "nombre" => "$10,000 - $20,000"],
        ["id" => 11, "nombre" => "$20,000 - $50,000"],
        ["id" => 12, "nombre" => "$50,000 - Adelante"]
    ];

    public function getSalarioMinimo()
	{
		switch($this->salario){
			case 1: $minimo = 0;
					break;
			case 2: $minimo = 100;
					break;
			case 3: $minimo = 200;
					break;
			case 4: $minimo = 300;
					break;
			case 5: $minimo = 500;
					break;
			case 6: $minimo = 1000;
					break;
			case 7: $minimo = 2000;
					break;
			case 8: $minimo = 3000;
					break;
			case 9: $minimo = 5000;
					break;
			case 10: $minimo = 10000;
					break;
			case 11: $minimo = 20000;
					break; 
			case 12: $minimo = 50000;
					break;
			default: $minimo = 0;
		}
		return $minimo;
	}
	
	public function getSalarioMaximo()
	{
		switch($this->salario){
			case 1: $maximo = 100;
					break;
			case 2: $maximo = 200;
					break;
			case 3: $maximo = 300;
					break;
			case 4: $maximo = 500;
					break;
			case 5: $maximo = 1000;
					break;
			case 6: $maximo = 2000;
					break;
			case 7: $maximo = 3000;
					break;
			case 8: $maximo = 5000;
					break;
			case 9: $maximo = 10000;
					break;
			case 10: $maximo = 20000;
					break; 
			case 11: $maximo = 50000;
					break;
			case 12: $maximo = 10000000;
					break;
			default: $maximo = 100;
		}
		return $maximo;
    }
    
}