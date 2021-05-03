import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./PersonaList";
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  it("Some title", () => {
    const appWrapper = shallow(<App />);
  });

  it("render Person list", () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });
});
