import { RegistrationObjects } from "./registrationObjects.js";

export class RegistrationAction {
  constructor(page) {
    this.page = page;
    this.registrationObjects = new RegistrationObjects(page);
  }
  async clickAccountIcon() {
    await this.registrationObjects.accountIcon.click();
  }
  async clickCreateAccountLink() {
    await this.registrationObjects.createAccountLink.click();
  }
  async fillRegistrationForm(fullName, email, password) {
    console.log(
      "DEBUG: fullName locator ->",
      this.registrationObjects.fullNameInput.toString(),
    );
    await this.registrationObjects.fullNameInput.waitFor({
      state: "visible",
      timeout: 5000,
    });
    await this.registrationObjects.fullNameInput.fill(fullName);
    await this.registrationObjects.emailInput.fill(email);
    await this.registrationObjects.passwordInput.fill(password);
  }
  async clickSignUpButton() {
    await this.registrationObjects.buttonSignUp.click();
  }
}
