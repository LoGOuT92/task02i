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
