export class RegistrationObjects {
  constructor(page) {
    this.page = page;
    this.accountIcon = page.locator('//a[contains(@href,"account")]');
    this.createAccountLink = page.locator('//a[contains(@href,"register")]');
    // Use flexible locators: try name attributes, placeholders, or aria-labels
    this.fullNameInput = page.locator(
      'input[name="full_name"], input[name="fullname"], input[placeholder*="Full"], input[aria-label*="Full"]',
    );
    this.emailInput = page.locator(
      'input[name="email"], input[type="email"], input[placeholder*="Email"], input[aria-label*="Email"]',
    );
    this.passwordInput = page.locator(
      'input[name="password"], input[type="password"], input[placeholder*="Password"], input[aria-label*="Password"]',
    );
    this.buttonSignUp = page.getByRole("button", { name: /sign up/i });
  }
}
