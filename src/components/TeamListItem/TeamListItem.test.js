import React from "react";
import ReactDOM from "react-dom";
import TeamListItem from "./TeamListItem";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <TeamListItem />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <TeamListItem />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
