import React from "react";
import ReactDOM from "react-dom";
import PrivateRoute from "./PrivateRoute";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <PrivateRoute />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <PrivateRoute />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
