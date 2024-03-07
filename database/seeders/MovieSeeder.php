<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $movies = [
            [
                'name' => 'Movie 1',
                'slug' => 'movie-1',
                'category' => 'Action',
                'video_url' => 'https://example.com/movie1',
                'thumbnail' => 'https://example.com/thumbnails/movie1.jpg',
                'rating' => 8.5,
                'is_featured' => true,
            ],
            [
                'name' => 'Movie 2',
                'slug' => 'movie-2',
                'category' => 'Action',
                'video_url' => 'https://example.com/movie2',
                'thumbnail' => 'https://example.com/thumbnails/movie2.jpg',
                'rating' => 8.5,
                'is_featured' => true,
            ]
        ];

        Movie::insert($movies);
    }
}
