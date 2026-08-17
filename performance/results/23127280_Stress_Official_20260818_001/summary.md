{
  "source": "performance/results/23127280_Stress_Official_20260818_001/23127280_Stress_Official_20260818_001.jtl",
  "evidence_state": "HUMAN_VERIFIED",
  "samples": 7607,
  "successes": 7607,
  "errors": 0,
  "error_rate_percent": 0.0,
  "duration_seconds": 479.886,
  "throughput_samples_per_second": 15.852,
  "elapsed_ms": {
    "min": 0,
    "p50": 3,
    "p90": 27,
    "p95": 35,
    "p99": 64,
    "max": 8821
  },
  "labels": {
    "Scenario B - Coupon Purchase E2E": 799,
    "01 POST /api/login": 791,
    "02 GET /api/products search": 785,
    "03 GET /api/products/{product_id}": 774,
    "04 POST /api/cart": 764,
    "05 GET /api/cart": 756,
    "06 POST /api/apply-coupon": 744,
    "07 POST /api/checkout using final_amount": 737,
    "08 POST /api/coupon-usage": 733,
    "09 GET /api/orders/my-orders": 724
  },
  "response_codes": {
    "200": 7599,
    "": 8
  }
}
