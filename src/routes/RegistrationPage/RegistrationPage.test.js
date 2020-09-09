import React from "react";
import ReactDOM from "react-dom";
import RegistrationPage from "./RegistrationPage";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <RegistrationPage />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
