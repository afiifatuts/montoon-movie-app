<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscribtion extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =['user_id','subscription_plan_id','price','expired_date','payment_status','snaptoken'];

    /**
     * Get the subscriptionPlan that owns the UserSubscribtion
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subscriptionPlan(): BelongsTo
    {
        return $this->belongsTo(SubscribtionPlan::class);
    }
}
