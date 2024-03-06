<?php

namespace Database\Seeders;

use App\Models\SubscribtionPlan;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['features 1', 'features 2'])
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode(['features 1', 'features 2', 'features 2', 'features 2', 'features 2'])
            ],
        ];

        SubscribtionPlan::insert($subscriptionPlans);
    }
}
