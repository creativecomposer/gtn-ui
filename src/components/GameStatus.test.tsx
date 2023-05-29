import { render, screen } from "@testing-library/react";
import GameStatus from "./GameStatus";

describe("GameStatus component", function () {
  it("should show status message as per the given status text", function () {
    render(<GameStatus status="init" guessCount={0} />);

    const statusText = screen.getByText("Game started");

    expect(statusText).toBeInTheDocument();
  });

  it("should show the given guess count", function () {
    render(<GameStatus status="high" guessCount={4} />);

    const guessCountElement = screen.getByTestId("guess-count");

    expect(guessCountElement).toBeInTheDocument();
  });
});
