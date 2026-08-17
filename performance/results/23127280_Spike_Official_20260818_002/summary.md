{
  "source": "performance/results/23127280_Spike_Official_20260818_002/23127280_Spike_Official_20260818_002.jtl",
  "evidence_state": "HUMAN_VERIFIED",
  "samples": 36598,
  "successes": 36598,
  "errors": 0,
  "error_rate_percent": 0.0,
  "duration_seconds": 259.589,
  "throughput_samples_per_second": 140.984,
  "elapsed_ms": {
    "min": 0,
    "p50": 6,
    "p90": 32,
    "p95": 58,
    "p99": 151,
    "max": 444
  },
  "labels": {
    "Scenario B - Coupon Purchase E2E": 3660,
    "01 POST /api/login": 3660,
    "02 GET /api/products search": 3660,
    "03 GET /api/products/{product_id}": 3660,
    "04 POST /api/cart": 3660,
    "05 GET /api/cart": 3660,
    "06 POST /api/apply-coupon": 3660,
    "07 POST /api/checkout using final_amount": 3660,
    "08 POST /api/coupon-usage": 3659,
    "09 GET /api/orders/my-orders": 3659
  },
  "response_codes": {
    "200": 36598
  }
}
