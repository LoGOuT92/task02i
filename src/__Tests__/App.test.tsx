import axios from "axios";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("mock error fetch", async () => {
  mockedAxios.get.mockImplementation(() =>
    Promise.reject({ response: { data: { error: { message: "error" } } } })
  );
  render(<App />);
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  expect(screen.getByText("error")).toBeInTheDocument();
});
