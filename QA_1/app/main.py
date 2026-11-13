from QA_1.app.shop import is_valid_password, calculate_total


def check_password():
    pw = input("Enter password: ")
    print("VALID" if is_valid_password(pw) else "INVALID")


def order_total():
    try:
        price = float(input("Price per item (IDR): "))
        qty = int(input("Quantity: "))
        disc = float(input("Discount % (0-100): "))
        print(f"Total payable: IDR {calculate_total(price, qty, disc):,.2f}")
    except ValueError as e:
        print(f"Error: {e}")


def main():
    while True:
        print("\n1) Check password  2) Calculate order total  3) Exit")
        choice = input("> ")
        if choice == "1":
            check_password()
        elif choice == "2":
            order_total()
        elif choice == "3":
            break


if __name__ == "__main__":
    main()