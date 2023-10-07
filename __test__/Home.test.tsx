import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  // 1
  it("Docs 라는 단어가 있는지", () => {
    render(<Home />);

    const myEl = screen.getByText("Docs");

    expect(myEl).toBeInTheDocument();
  });

  // 2
  it("'information' 라는 단어가 있는지", () => {
    render(<Home />);

    const myEl = screen.getByText(/information/i);

    expect(myEl).toBeInTheDocument();
  });

  // 3
  it("heading 이 있는지", () => {
    render(<Home />);

    const myEl = screen.getByRole("heading", {
      name: "Learn",
    });

    expect(myEl).toBeInTheDocument();
  });
});
