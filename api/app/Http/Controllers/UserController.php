<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    public function login(Request $request) 
    {
        $post = $request->post();

        $data["user"] = "";
        $data["isLogging"] = false;
        $data["errors"] = "";

        if (Auth::attempt(['email' => $post['email'], 'password' => $post['password']])) {
            $data["isLogging"] = true;
            $data["user"] = Auth::user();
        } else {
            $data["errors"] = "Username or Password Incorrect";
        }

        return response()->json($data, $this->successStatus);
    }

    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $data["user"] = "";
        $data["isCreated"] = true;
        $data["errors"] = "";

        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email|unique:users', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);

        if ($validator->fails()) {
            $data["isCreated"] = false;
            $data["errors"] = (string) $validator->errors();
            //return response()->json($data, 401);   
            return response()->json($data, $this->successStatus);          
        }

        $input = $request->all(); 
        $data["user"] = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'api_token' => hash('sha256', Str::random(60)),
        ]);
        
        return response()->json($data, $this->successStatus); 
    }
}
