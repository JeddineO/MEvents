<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserLogin extends Controller
{
    public function connect(LoginRequest $request)
    {
        $validateddata = $request->validated();
        if (Auth::guard('client')->attempt($validateddata)) {
            $request->session()->regenerate();
            return response()->json([
                'status' => 200,
                'message' => "connected",
                'data' => Auth::User(),
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'message' => "Not connected",
            ]);
        }
    }
}
