# Scenario B contract

Use this exact business order:

1. `POST /api/login`; assert success and extract `token`, `user.id`.
2. `GET /api/products?search=${search_keyword}`; assert a non-empty matching response.
3. `GET /api/products/${product_id}`; assert the ID, name, and a numeric positive price.
4. `POST /api/cart` with Bearer token and `id`, `name`, `price`, `quantity`.
5. `GET /api/cart` with Bearer token; assert the selected product is present.
6. `POST /api/apply-coupon` with `code`, calculated `total_amount`, and `user_id`; extract `coupon_id`, `discount_amount`, `final_amount` and assert `0 < final_amount < total_amount`.
7. `POST /api/checkout` with Bearer token, `total_amount: final_amount`, and `shipping_address`; extract `orderId`.
8. `POST /api/coupon-usage` with Bearer token and `coupon_id`, only after checkout success.
9. `GET /api/orders/my-orders` with Bearer token; assert the response contains the new `orderId`.

CSV header:

```text
email,password,search_keyword,product_id,quantity,coupon_code,shipping_address
```

Runtime properties:

```text
base_url,users_csv,threads,ramp_seconds,hold_seconds,think_min_ms,think_max_ms,run_id,result_path,report_path
```

Known constraints: backend startup rebuilds SQLite; cart state is process memory and is not cleared after checkout; wrong login attempts can lock an account; coupon usage is stateful; the percent formula is suspect; order history grows after every checkout.

