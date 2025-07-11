<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Recipe extends Model
{
    use HasFactory;

    protected $table = 'recipes';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'title',
        'description',
        'image',
        'alt',
        'cuisine_type',
        'dietary_preferences',
        'cooking_difficulty',
        'cooking_way',
    ];

    protected $casts = [
        'dietary_preferences' => 'array', // JSON field
        'cooking_difficulty' => 'string', // Enum field
    ];

    /**
     * Boot method to handle custom ID generation in '0001' format.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                // Get the max current ID and increment
                $maxId = static::max('id');
                $nextId = $maxId ? str_pad(((int) $maxId) + 1, 4, '0', STR_PAD_LEFT) : '0001';
                $model->id = $nextId;
            }
        });
    }

    /**
     * Scope for filtering by cuisine type.
     */
    public function scopeCuisineType($query, $type)
    {
        return $query->where('cuisine_type', $type);
    }

    /**
     * Scope for filtering by cooking difficulty.
     */
    public function scopeCookingDifficulty($query, $difficulty)
    {
        return $query->where('cooking_difficulty', $difficulty);
    }
} 