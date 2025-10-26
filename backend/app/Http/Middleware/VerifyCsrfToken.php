<?php
// ...existing code...

use Illuminate\Foundation\Configuration\Middleware;

class VerifyCsrfToken extends Middleware
{
    // ...existing code...

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'register',    // exclude POST /register
        // 'api/*',    // optionally exclude all api routes
    ];

    // ...existing code...
}
