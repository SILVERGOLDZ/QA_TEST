SHIPPING_FEE = 15000
FREE_SHIPPING_MIN = 100000


def is_valid_password(password):
    if len(password) <= 8:
        return False
    if not any(c.isupper() for c in password):
        return False
    if not any(c.isdigit() for c in password):
        return False
    return True


def calculate_total(price, quantity, discount_percent=0):
    if price <= 0:
        raise ValueError("Price must be greater than 0")
    if quantity < 0:
        raise ValueError("Quantity must be at least 1")
    if discount_percent < 0:
        raise ValueError("Discount must be between 0 and 100")

    subtotal = price * quantity
    after_discount = subtotal * (1 - discount_percent / 100)
    shipping = 0 if after_discount > FREE_SHIPPING_MIN else SHIPPING_FEE
    return round(after_discount + shipping, 2)