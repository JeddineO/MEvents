<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProviderRequest;
use App\Models\Provider;

class ProviderController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Hello from provider controller'
        ]);
    }

    public function store(ProviderRequest $request)
    {
        Provider::create($request->validated());
        $data['photo'] = $request->validated('photo')->store('images/providers', 'public');
        return response()->json([
            'status' => 200,
            'message' => 'Vous êtes inscrit avec succès',
        ], 200);
    }

    public function show(Provider $provider)
    {
        return response()->json([
            'status' => 200,
            'provider' => $provider
        ]);
    }
}
