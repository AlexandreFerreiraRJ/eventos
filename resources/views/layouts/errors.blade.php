<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="dns-prefetch" href="https://fonts.gstatic.com">

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <div class="mt-lg-5">
            @yield('content')
        </div>
    </body>
</html>
