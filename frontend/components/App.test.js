import React from "react"
import { render } from "@testing-library/react"
import AppClass from "./AppClass"
import AppFunctional from "./AppFunctional"

test('sanity', () => {
  expect(true).toBe(false)
})
test("1", () => {
  render(<AppClass/>);
});

test("2", () => {
  render(<AppFunctional/>);
});
