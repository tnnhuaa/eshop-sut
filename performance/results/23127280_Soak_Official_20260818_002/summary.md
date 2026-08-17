{
  "source": "performance/results/23127280_Soak_Official_20260818_002/23127280_Soak_Official_20260818_002.jtl",
  "evidence_state": "HUMAN_VERIFIED",
  "samples": 16759,
  "successes": 16759,
  "errors": 0,
  "error_rate_percent": 0.0,
  "duration_seconds": 659.52,
  "throughput_samples_per_second": 25.411,
  "elapsed_ms": {
    "min": 0,
    "p50": 2,
    "p90": 8,
    "p95": 9,
    "p99": 11,
    "max": 120
  },
  "labels": {
    "01 POST /api/login": 1865,
    "02 GET /api/products search": 1865,
    "03 GET /api/products/{product_id}": 1864,
    "04 POST /api/cart": 1863,
    "05 GET /api/cart": 1863,
    "06 POST /api/apply-coupon": 1860,
    "07 POST /api/checkout using final_amount": 1860,
    "08 POST /api/coupon-usage": 1860,
    "09 GET /api/orders/my-orders": 1859
  },
  "response_codes": {
    "200": 16759
  }
}
