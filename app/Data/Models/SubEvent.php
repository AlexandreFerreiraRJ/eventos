<?php

namespace App\Data\Models;

class SubEvent extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'date',
        'time',
        'place',
        'invitation_text',
        'confirmation_text',
        'credential_send_text',
        'event_id',
        'costume_id',
    ];

    protected $with = ['event', 'address', 'costume'];

    public function address()
    {
        return $this->morphOne(Address::class, 'addressable');
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function costume()
    {
        return $this->belongsTo(Costume::class);
    }
}
