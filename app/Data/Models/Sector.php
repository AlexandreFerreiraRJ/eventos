<?php

namespace App\Data\Models;

use App\Services\Color\Service as Color;

class Sector extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'color', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }

    public function getBackgroundAttribute()
    {
        return app(Color::class)->getColor($this->color, 0);
    }

    public function getForegroundAttribute()
    {
        return app(Color::class)->getColor($this->color, 1);
    }
}
