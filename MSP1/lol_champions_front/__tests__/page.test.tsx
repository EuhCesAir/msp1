import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Render the main page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "League of Legends Champions",
    })
  ).toBeDefined();
});
