import React, { useRef } from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import NumberINput from "../components/NumericInput";

test("renders learn react link", () => {
  render(
    <NumberINput
      filteredProductId={""}
      setFilteredProductId={function (val: string): void {}}
      fetchSinglProduct={function (): void {}}
      fetchProducts={function (): void {}}
      placeholder="Find product by id"
    />
  );
  const placeholderElement = screen.getByPlaceholderText(/Find product by id/i);
  expect(placeholderElement).toBeInTheDocument();
});

describe("NumberInput component", () => {
  it("should render an input element with the correct placeholder", () => {
    const placeholder = "Enter product ID";
    const { getByPlaceholderText } = render(
      <NumberINput
        placeholder={placeholder}
        filteredProductId={""}
        setFilteredProductId={function (val: string): void {
          throw new Error("Function not implemented.");
        }}
        fetchSinglProduct={function (): void {
          throw new Error("Function not implemented.");
        }}
        fetchProducts={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });
});
