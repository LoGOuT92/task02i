import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "../components/Modal";

describe("Modal component", () => {
  it("should display the data passed in as a prop", () => {
    const data = {
      id: 1,
      name: "Test Product",
      color: "blue",
      year: 2010,
      pantone_value: "pantone_value",
    };
    const { getByText } = render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}} data={data} />
    );
    expect(screen.getByText(data.id)).toBeInTheDocument();
    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText(data.color)).toBeInTheDocument();
  });

  it("should not display anything when data prop is null", () => {
    const { container } = render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}} data={null} />
    );
    expect(container.textContent).toEqual("");
  });
});
