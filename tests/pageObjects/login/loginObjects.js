export class LoginObjects {
  constructor(page) {
    this.page = page;
    this.accountIcon = page.locator('//a[contains(@href,"account")]');
    this.createAccountLink = page.locator('//a[contains(@href,"register")]');
    this.fullNameInput = page.getbyRole("textbox", { name: "full_name" });
    this.emailInput = page.getbyRole("textbox", { name: "email" });
    this.passwordInput = page.getbyRole("textbox", { name: "Password" });
    this.registerButton = page.getbyRole("button", { name: "Sign Up" });
  }
}
