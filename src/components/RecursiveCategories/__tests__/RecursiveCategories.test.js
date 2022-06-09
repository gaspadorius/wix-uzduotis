import React from "react";
import { render } from "@testing-library/react";
import mockData from "../../../mockData";
import RecursiveCategories from '../index';

describe("Recursive Categories Component", function () {
  it("should render a first level category correctly.", function () {
    let { getByText } = render(<RecursiveCategories categories={mockData} />);
    expect(getByText("Lorem")).toHaveTextContent('Lorem');
  });
});
