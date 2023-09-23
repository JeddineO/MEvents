<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'adress' => 'required|string|max:255',
            'password' => 'required|string|max:255',
            'email' => 'required|string|email|unique:students|max:255',
            'phone_number' => 'required|string|max:20',
        ]);

        Client::create($validatedData);

        return response()->json([
            'status' => 200,
            'message' => 'Client added Succssfully',
        ]);
    }
    public function edit(Request $request, $id)
    {
        $validatedData = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'adress' => 'required|string|max:255',
            'password' => 'required|string|max:255',
            'email' => 'required|string|email|unique:students|max:255',
            'phone_number' => 'required|string|max:20',
        ]);
        $client = client::findOrFail($id);

        // Update the record with the new data
        $client->update($validatedData);

        return response()->json([
            'status' => 200,
            'message' => 'Client edited Succssfully',
        ]);
    }
}