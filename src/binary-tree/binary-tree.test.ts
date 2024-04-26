import assert from "node:assert";
import test, { describe } from "node:test";
import { faker } from "@faker-js/faker";

const binarySearch = (list: string[], item: number) => {};

describe("Binary Search Tree", () => {
  test("", () => {
    const names: string[] = [];
    for (let i = 1; i <= 128; i++) {
      names.push(faker.person.firstName());
    }

    const name = binarySearch();

    assert.strictEqual(1, 1);
  });
});
