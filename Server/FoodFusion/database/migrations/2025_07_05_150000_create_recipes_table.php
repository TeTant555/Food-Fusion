<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recipes', function (Blueprint $table) {
            // Custom string ID, e.g., '0001', '0002', ...
            // This is NOT auto-incremented. Application logic must handle ID generation.
            $table->string('id', 8)->primary();
            $table->string('title');
            $table->text('description');
            $table->string('image');
            $table->string('alt');
            $table->string('cuisine_type')->index();
            $table->json('dietary_preferences');
            $table->enum('cooking_difficulty', ['easy', 'medium', 'hard'])->index();
            $table->longText('cooking_way');
            $table->timestamps();

            // Index for faster searching by dietary_preferences (JSON)
            $table->index(["dietary_preferences"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
}; 