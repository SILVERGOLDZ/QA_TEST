import { describe, it, expect } from "vitest";
// Replace with the actual function and import path
import { calculateTotal } from "../src/shop"; 

//Manual testing only from application input: F-OT-PRICE-04,05 F-OT-QUANTITY-04,05, F-OT-DISCOUNT-07,08


const validCases: [string, number, number, number, number][] = [
    ["F-OT-PRICE-03", 1, 1, 0, 15001],
    ["F-OT-QUANTITY-02", 1, 1, 0, 15001],
    ["F-OT-QUANTITY-03", 1, 2, 0, 15002],
    ["F-OT-DISCOUNT-02", 1, 1, 0, 15001],
    ["F-OT-DISCOUNT-03", 1, 1, 1, 15000.99],
    ["F-OT-DISCOUNT-04", 1, 1, 99, 15000.01],
    ["F-OT-DISCOUNT-05", 1, 1, 100, 15000],

    //operation
    ["OP-OT-TOTAL-01", 1000, 1, 100, 15000],
    ["OP-OT-TOTAL-02", 1000, 1, 0, 16000],
    ["OP-OT-TOTAL-03", 1000, 2, 0, 17000],
    ["OP-OT-TOTAL-04", 1000, 1, 50, 15500],
    ["OP-OT-TOTAL-05", 100001, 1, 0, 100001],
    ["OP-OT-TOTAL-06", 100000, 1, 0, 100000],
    ["OP-OT-TOTAL-07", 99999, 1, 0, 114999],
    ["OP-OT-TOTAL-08", 200000, 1, 50, 100000],
    ["OP-OT-TOTAL-09", 120000, 1, 20, 111000],
    

];

const invalidCases: [string, number, number, number, string][] = [
    ["F-OT-PRICE-01", -1, 1, 0, "price"],
    ["F-OT-PRICE-02", 0, 1, 0, "price"],
    ["F-OT-QUANTITY-01", 1, 0, 0, "quantity"],
    // ["F-OT-QUANTITY-06", 1, 1.1, 0, "quantity"], manual tested
    ["F-OT-DISCOUNT-01", 1, 1, -1, "discount"],
    ["F-OT-DISCOUNT-06", 1, 1, 101, "discount"],
];


describe("REQ-2 order total rules", () => {
  it.each(validCases)('%s: price = %s, quantity = %s, discount = %s -> %s', (_id, price, quantity, discountPercent, expected) => {
    expect(calculateTotal(price, quantity, discountPercent)).toBe(expected);
  });

  it.each(invalidCases)('%s: price = %s, quantity = %s, discount = %s -> throw error', (_id, price, quantity, discountPercent, field) => {
    expect(() => calculateTotal(price, quantity, discountPercent)).toThrow(new RegExp(field, "i"));
  });

});