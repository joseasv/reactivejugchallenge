import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect } from "vitest";

test("correct solution with integer inputs", async () => {
  const user = userEvent.setup();

  render(<App />);

  const xInput = screen.getByLabelText("X:");
  const yInput = screen.getByLabelText("Y:");
  const zInput = screen.getByLabelText("Z:");

  const calcButton = screen.getByText("Calculate");

  await user.type(xInput, "2");
  await user.type(yInput, "10");
  await user.type(zInput, "4");

  await user.click(calcButton);

  const tableRows = screen.getAllByRole("row");

  expect(tableRows).toHaveLength(5);

  expect(tableRows[1].querySelector("td:nth-child(1)").textContent).toBe("2");
  expect(tableRows[1].querySelector("td:nth-child(2)").textContent).toBe("0");
  expect(tableRows[1].querySelector("td:nth-child(3)").textContent).toBe(
    "Fill Bucket X",
  );

  expect(tableRows[2].querySelector("td:nth-child(1)").textContent).toBe("0");
  expect(tableRows[2].querySelector("td:nth-child(2)").textContent).toBe("2");
  expect(tableRows[2].querySelector("td:nth-child(3)").textContent).toBe(
    "Transfer from Bucket X to Bucket Y",
  );

  expect(tableRows[3].querySelector("td:nth-child(1)").textContent).toBe("2");
  expect(tableRows[3].querySelector("td:nth-child(2)").textContent).toBe("2");
  expect(tableRows[3].querySelector("td:nth-child(3)").textContent).toBe(
    "Fill Bucket X",
  );

  expect(tableRows[4].querySelector("td:nth-child(1)").textContent).toBe("0");
  expect(tableRows[4].querySelector("td:nth-child(2)").textContent).toBe("4");
  expect(tableRows[4].querySelector("td:nth-child(3)").textContent).toBe(
    "Transfer from Bucket X to Bucket Y",
  );
});

test("display no solution when there's an edge case", async () => {
  const user = userEvent.setup();

  render(<App />);

  const xInput = screen.getByLabelText("X:");
  const yInput = screen.getByLabelText("Y:");
  const zInput = screen.getByLabelText("Z:");

  const calcButton = screen.getByText("Calculate");

  await user.type(xInput, "2");
  await user.type(yInput, "6");
  await user.type(zInput, "5");

  await user.click(calcButton);

  expect(screen.getByText("No solution")).toBeInTheDocument();
});

test("display no solution when one of the inputs is a character", async () => {
  const user = userEvent.setup();

  render(<App />);

  const xInput = screen.getByLabelText("X:");
  const yInput = screen.getByLabelText("Y:");
  const zInput = screen.getByLabelText("Z:");

  const calcButton = screen.getByText("Calculate");

  await user.type(xInput, "2");
  await user.type(yInput, "10");
  await user.type(zInput, "a");

  await user.click(calcButton);

  expect(screen.getByText("No solution")).toBeInTheDocument();
});

test("display no solution when there's an empty input", async () => {
  const user = userEvent.setup();

  render(<App />);

  const xInput = screen.getByLabelText("X:");
  const yInput = screen.getByLabelText("Y:");

  const calcButton = screen.getByText("Calculate");

  await user.type(xInput, "2");
  await user.type(yInput, "10");
  await user.click(calcButton);

  expect(screen.getByText("No solution")).toBeInTheDocument();
});

test("display no solution when there's a negative number", async () => {
  const user = userEvent.setup();

  render(<App />);

  const xInput = screen.getByLabelText("X:");
  const yInput = screen.getByLabelText("Y:");
  const zInput = screen.getByLabelText("Z:");

  const calcButton = screen.getByText("Calculate");

  await user.type(xInput, "2");
  await user.type(yInput, "10");
  await user.type(zInput, "-4");
  await user.click(calcButton);

  expect(screen.getByText("No solution")).toBeInTheDocument();
});