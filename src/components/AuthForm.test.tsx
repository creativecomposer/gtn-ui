import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthForm from "./AuthForm";
import { Credentials } from "../types";

describe("AuthForm component", function () {
  it("should return the given username and password on submit", async function () {
    let result: Credentials = {
      username: "",
      password: "",
    };
    const onLogin = jest.fn((output: Credentials) => (result = output));
    const user = userEvent.setup();

    render(<AuthForm onLogin={onLogin} isLoading={false} />);

    const usernameInput = screen.getByLabelText("User Name");
    await user.type(usernameInput, "hello@world.com");

    const passwordInput = screen.getByLabelText("Password");
    await user.type(passwordInput, "MyPassword");

    await user.keyboard("{Enter}");

    expect(onLogin).toHaveBeenCalledTimes(1);
    expect(result.username).toBe("hello@world.com");
  });
});
