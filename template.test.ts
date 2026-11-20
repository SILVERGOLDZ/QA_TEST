import { describe, it, expect } from "vitest";
// Replace with the actual function and import path
import { isValidPassword } from "path/to/module"; 

const cases: [string, string, boolean][] = [
// [test ID, password, expected result]
  ["ID", "INPUT", true],
  ["FV-PWD-02", "Abcdefgh1", true],
];

const skippedCases: [string, string, boolean][] = [
  ["F-PWD-11", "Abcdefg1!", true],
];

describe("REQ-1 password rules", () => {
  it.each(cases)('%s: "%s" -> %s', (_id, password, expected) => {
    expect(isValidPassword(password)).toBe(expected);
  });

  it.skip.each(skippedCases)('%s: "%s" -> pending clarification, gap #1', (_id, password, expected) => {
    expect(isValidPassword(password)).toBe(expected);
  });
});