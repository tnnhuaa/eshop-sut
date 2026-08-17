{
  "source": "performance/results/23127280_Spike_Official_20260818_001/23127280_Spike_Official_20260818_001.jtl",
  "evidence_state": "REJECTED",
  "samples": 38010,
  "successes": 30003,
  "errors": 8007,
  "error_rate_percent": 21.0655,
  "duration_seconds": 260.769,
  "throughput_samples_per_second": 145.761,
  "elapsed_ms": {
    "min": 0,
    "p50": 2,
    "p90": 14,
    "p95": 25,
    "p99": 64,
    "max": 1045
  },
  "labels": {
    "Validate L, run_id, CSV and profile": 1,
    "Scenario B - Coupon Purchase E2E": 4002,
    "01 POST /api/login": 4002,
    "02 GET /api/products search": 4001,
    "03 GET /api/products/{product_id}": 4001,
    "04 POST /api/cart": 4001,
    "05 GET /api/cart": 4001,
    "06 POST /api/apply-coupon": 4001,
    "07 POST /api/checkout using final_amount": 4001,
    "08 POST /api/coupon-usage": 1999,
    "09 GET /api/orders/my-orders": 4000
  },
  "response_codes": {
    "200": 32004,
    "400": 6006
  }
}
