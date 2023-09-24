<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProviderAuthRequest;
use App\Models\Provider;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function authentificate(ProviderAuthRequest $request)
    {
        $credentials = $request->validated();        
        // authentification with username or email
        $fieldType = filter_var($credentials['username'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        // merge the field type with the request
        $credentials = array_merge([$fieldType => $credentials['username']], ['password' => $credentials['password']]);
        // Check if the "Remember Me" checkbox is checked
        $remember = $request->has('remember');

        if (Auth::guard('provider')->attempt($credentials, $remember)) {
            return response()->json([
                'status' => 200,
                'message' => 'You are logged in successfully.',
                'user' => Auth::guard('provider')->user(),
            ], 200);
        }
        else {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid credentials.',
            ], 401);
        }
    }
}
