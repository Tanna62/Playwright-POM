import { test } from "@playwright/test";
import { RegistrationAction } from "../pageObjects/registration/registrationAction";
test.describe("Evershop E-commerce Registration Feature Test", () => {
  test("User should be able to register successfully with valid credentials", async ({
    page,
  }) => {
    const locator = new RegistrationAction(page);
    await page.goto("https://demo.evershop.io/");
    await page.waitForTimeout(5000); // Wait for the homepage to load completely
    await locator.clickAccountIcon();
    await locator.clickCreateAccountLink();
    await page.waitForTimeout(5000); // Wait for the registration form to load
    await locator.fillRegistrationForm(
      "John Doe",
      "john.doe@example.com",
      "Password123!",
    );
    await locator.clickSignUpButton();
  });
});
