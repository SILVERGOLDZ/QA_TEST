import { describe, it, expect } from "vitest";
import { isValidPassword } from "../src/shop";

// [test ID, password, expected result]
const cases: [string, string, boolean][] = [
  ["F-PWD-01", "Abcdefg1", true],
  ["F-PWD-02", "Abcdefgh1", true],
  ["F-PWD-03", "Abcdef1", false],
  ["F-PWD-04", "abcdefgh1", false],
  ["F-PWD-05", "Abcdefghi", false],
  ["F-PWD-06", "A bcdefg1", false],
  ["F-PWD-07", "abcdefgH1", true],
  ["F-PWD-08", "Abcd1efgh", true],
  ["F-PWD-09", "", false],
  ["F-PWD-10", "Abcdefg1 ", false],
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