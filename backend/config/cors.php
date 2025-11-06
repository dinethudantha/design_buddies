<?php

return [

    /* ... (comments omitted) ... */

    // Fix: This should allow all paths for the API endpoints
    'paths' => ['api/*', 'sanctum/csrf-cookie','register','login','logout'],

    // Fix: This must be a list of HTTP methods, NOT a URL
    'allowed_methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    // Fix: Use the environment variable, ensuring the .env value is clean
    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:5173')],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // KEEP: This is REQUIRED for Laravel Sanctum SPA authentication
    'supports_credentials' => true,

];
