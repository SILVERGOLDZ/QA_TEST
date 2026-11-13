REQ-1: Password rules. A password is valid only if it has all of these:

At least 8 characters
At least 1 uppercase letter
At least 1 digit
No spaces

REQ-2: Order total.

Price must be greater than 0
Quantity must be a whole number of at least 1
Discount must be between 0 and 100 (inclusive)
Total = price × quantity × (1 − discount/100), plus a shipping fee of IDR 15,000
Shipping is free if the amount after discount is IDR 100,000 or more
Invalid input must show a clear error, never a wrong total