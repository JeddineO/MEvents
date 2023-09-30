<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Http\Requests\MediaRequest;
use App\Http\Requests\OptionRequest;
use App\Http\Requests\ServiceRequest;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    
    public function index()
    {
        $services = Service::where('provider_id', Auth::guard('provider')->user()->id)->latest()->get();
        return response()->json([
            'status' => 200,
            'message' => 'All services of the current provider.',
            'services' => $services,
        ], 200);
    }

    public function store(ServiceRequest $request, MediaRequest $mediaRequest, OptionRequest $optionRequest)
    {
        $serviceData = $request->validated();
        $mediasData = $mediaRequest->validated('medias');
        $service = Service::create($serviceData);
        $service->options()->createMany($optionRequest->validated('options'));
        $this->processMedias($mediasData, $service);
        return response()->json([
            'status' => 200,
            'message' => 'Service created successfully.',
        ], 200);
    }

    public function update(ServiceRequest $request, MediaRequest $mediaRequest, OptionRequest $optionRequest, Service $service)
    {
        $serviceData = $request->validated();
        $mediasData = $mediaRequest->validated('medias');
        $service->update($serviceData);
        $service->options()->delete();
        $service->options()->createMany($optionRequest->validate('options'));
        $this->processMedias($mediasData, $service);
        return response()->json([
            'status' => 200,
            'message' => 'Service updated successfully.',
        ], 200);
    }

    public function destroy(Service $service)
    {
        $medias = $service->medias()->get();
        foreach ($medias as $media) {
            Storage::disk('public')->delete($media->path);
        }
        $service->options()->delete();
        $service->medias()->delete();
        $service->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Service deleted successfully.',
        ], 200);
    }

    private function processMedias($mediasData, Service $service)
    {
        if ($mediasData == null) {    
            foreach ($mediasData as $mediaData) {
                $path = $mediaData->store('medias/services', 'public');
                $service->medias()->create([
                    'path' => $path,
                ]);
            }
        }
    }

}
