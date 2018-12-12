<?php

namespace App\Services\Environment;

use PragmaRX\Version\Package\Facade as Version;

class Service
{
    protected function buildEntitiesArray($user)
    {
        return $user
            ? collect([$user])
                ->merge($user->businesses)
                ->map(function ($entity) {
                    $entity->class = get_class($entity);

                    return $entity;
                })
            : [];
    }

    public function data()
    {
        return coollect([
            'app' => [
                'name' => config('app.name'),
                'key' => auth()->user()
                    ? auth()->user()->client_key
                    : config('app.client_key'),
                'id' => auth()->user() ? auth()->user()->email : csrf_token(),
                'version' => Version::format('compact'),
            ],

            'token' => csrf_token(),

            'captcha_enabled' =>
                app()->environment() == 'local' && env('DISABLE_CAPTCHA')
                    ? false
                    : true,

            'captcha_siteKey' => config('services.recaptcha.siteKey'),

            'debug' => config('app.debug'),

            'session' => [
                'lifetime' => config('session.lifetime'),

                'frontend' => [
                    'lifetime' => config('session.frontend.lifetime'),

                    'warning' => config('session.frontend.warning'),
                ],
            ],

            'user' => auth()->user(),

            'timestamp' => now()->toDateTimeString(),

            'old' => coollect(old())
                ->except('password', 'password_confirmation')
                ->toArray(),

            'google_maps' => [
                'api_key' => config('services.google_maps.api_key'),

                'geolocation' => [
                    'latitude' => -22.90337724433402,
                    'longitude' => -43.17343861373911,
                ],
            ],

            'events' => [
                'confirmation' => [
                    'enabled' => config('events.confirmation.enabled'),
                ],
            ],

            'broadcast' => [
                'driver' => config('broadcasting.default', 'pusher'),
            ],

            'pusher' => [
                'server' => config('broadcasting.connections.pusher.server'),

                'key' => config('broadcasting.connections.pusher.key'),

                'options' => [
                    'cluster' => config(
                        'broadcasting.connections.pusher.options.cluster',
                        'us2'
                    ),
                    'encrypted' => config(
                        'broadcasting.connections.pusher.options.encrypted',
                        false
                    ),
                    'host' => config(
                        'broadcasting.connections.pusher.options.backend_host',
                        '127.0.0.1'
                    ),
                    'port' => config(
                        'broadcasting.connections.pusher.options.port',
                        '6001'
                    ),
                    'scheme' => config(
                        'broadcasting.connections.pusher.options.scheme',
                        'http'
                    ),
                ],
            ],
        ]);
    }
}
