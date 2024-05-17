import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CompaniesRegistration from "../components/main-unusual/registry and crud/registry-company/companies-registration";
//DOUBTS HOW TO TEST IF USERNAME AND EMAIL ALREADY EXISTS - TO ASK TEACHER

// RENDERING tests...
describe("CompaniesRegistration Component - Rendering and Basic Structure", () => {
  it("renders without errors", () => {
    render(
      <Router>
        <CompaniesRegistration />
      </Router>
    );
  });

  it("renders expected elements on the page", () => {
    render(
      <Router>
        <CompaniesRegistration />
      </Router>
    );

    // form fields
    expect(screen.getByLabelText("Username*")).toBeInTheDocument();
    expect(screen.getByLabelText("Password*")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm password*")).toBeInTheDocument();
    expect(screen.getByLabelText("First name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Last name*")).toBeInTheDocument();
    expect(screen.getByLabelText("email*")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone number*")).toBeInTheDocument();
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
    expect(screen.getByLabelText("Zip code")).toBeInTheDocument();
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("Company name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Company phone number*")).toBeInTheDocument();
    expect(screen.getByLabelText("Company email*")).toBeInTheDocument();
    expect(screen.getByLabelText("Fiscal ID number")).toBeInTheDocument();
    expect(screen.getByLabelText("Company fiscal ID*")).toBeInTheDocument();
    expect(screen.getByLabelText("Country*")).toBeInTheDocument();
    expect(screen.getByText("Zip code*")).toBeInTheDocument();
    expect(screen.getByLabelText("City*")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Street and door number*")
    ).toBeInTheDocument();
    expect(screen.getByText("Banner")).toBeInTheDocument();
    expect(screen.getByText("Profile picture")).toBeInTheDocument();

    // REGISTER Button
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });
});

// FORM VALIDATION tests
//empty form validation - required fields
describe("Form Validation", () => {
  it("displays error messages for empty form submission", async () => {
    render(
      <Router>
        <CompaniesRegistration />
      </Router>
    );

    // Simulate submitting an empty form - REQUIRED FIELDS
    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    const requiredFields = [
      "Username",
      "Password",
      "Confirm Password",
      "First name",
      "Last name",
      "Email",
      "Phone number",
      "Company name",
      "Company email",
      "Company fiscal ID",
    ];

    await waitFor(() => {
      requiredFields.forEach((field) => {
        expect(screen.getByText(`${field} is required`)).toBeInTheDocument();
      });
    });
  });

  // PASSWORD AND PASSWORD CONFIRM MATCH
  it("displays an error message when passwords do not match", async () => {
    render(
      <Router>
        <CompaniesRegistration />
      </Router>
    );

    // Simulate different passwords
    const passwordInput = screen.getByLabelText("Password*");
    const confirmPasswordInput = screen.getByLabelText("Confirm password*");

    fireEvent.change(passwordInput, { target: { value: "eliana123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "eliana1234" },
    });

    // Form submission on register click - error if passwords don't match
    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    // ERROR IF PASSWORDS DON'T MATCH
    await waitFor(() => {
      expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
    });
  });

  it("displays an error message when password does not meet criteria", async () => {
    render(
      <Router>
        <CompaniesRegistration />
      </Router>
    );

    // Simulate a password that doesn't meet criteria
    const passwordInput = screen.getByLabelText("Password*");
    const confirmPasswordInput = screen.getByLabelText("Confirm password*");

    fireEvent.change(passwordInput, { target: { value: "eliana" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "eliana" } });

    // Form submission - error
    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    // Error message in component - check for it
    await waitFor(() => {
      expect(
        screen.getByText(
          "Password must have at least 6 characters and one number"
        )
      ).toBeInTheDocument();
    });
  });
});

//EMAIL FORMAT tests
it("displays an error message for an invalid email format", async () => {
  render(
    <Router>
      <CompaniesRegistration />
    </Router>
  );

  const emailInput = screen.getByLabelText("email*");

  // Simulates an invalid email format
  fireEvent.change(emailInput, { target: { value: "eliana.com" } });

  const submitButton = screen.getByRole("button", { name: "Register" });
  fireEvent.click(submitButton);

  // Checks if error message is displayed for the invalid email format
  await waitFor(() => {
    expect(screen.getByText("Invalid email format")).toBeInTheDocument();
  });
});

it("does not display an error message for a valid email format", async () => {
  render(
    <Router>
      <CompaniesRegistration />
    </Router>
  );

  const emailInput = screen.getByLabelText("email*");

  // Simulates a valid email format
  fireEvent.change(emailInput, {
    target: { value: "eliana@gmail.com" },
  });

  const submitButton = screen.getByRole("button", { name: "Register" });
  fireEvent.click(submitButton);

  // Check if there are no error messages for the valid email format
  await waitFor(() => {
    const errorMessage = screen.queryByText("Invalid email format");
    expect(errorMessage).toBeNull();
  });
});

//PHONE NUMBER - NUMERIC
it("displays an error message for an invalid phone number", async () => {
  render(
    <Router>
      <CompaniesRegistration />
    </Router>
  );

  const phoneNumberInput = screen.getByLabelText("Phone number*");

  // Simulate an invalid phone number
  fireEvent.change(phoneNumberInput, { target: { value: "abc123" } });

  const submitButton = screen.getByRole("button", { name: "Register" });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(
      screen.getByText("Phone number must contain only numbers")
    ).toBeInTheDocument();
  });
});

it("does not display an error message for a valid phone number", async () => {
  render(
    <Router>
      <CompaniesRegistration />
    </Router>
  );

  const phoneNumberInput = screen.getByLabelText("Phone number*");

  // Simulate a valid phone number
  fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });

  const submitButton = screen.getByRole("button", { name: "Register" });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const errorMessage = screen.queryByText(
      "Phone number must contain only numbers"
    );
    expect(errorMessage).toBeNull();
  });
});
