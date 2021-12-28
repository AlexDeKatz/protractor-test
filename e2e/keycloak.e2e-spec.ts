import { browser, ExpectedConditions } from "protractor";
import { KeyCloakPage } from "./keycloak.po";
import { CONFIGURATIONS } from "./Constants";
import { CommonUtils } from "./util.po";

describe("Keycloak Page", () => {
  let page: KeyCloakPage;
  let commonUtils: CommonUtils;

  beforeEach(() => {
    page = new KeyCloakPage();
    commonUtils = new CommonUtils();
  });

  it("should land to Sign In page and provide username and password to submit the sign-in form", async () => {
    // Land onto Keycloak page
    await commonUtils.navigateTo("",0, true);
    page
      .getPopupButton()
      .isPresent()
      .then(async (pres) => {
        if (pres) {
          const okButton = await page.getPopupButton();
          browser.sleep(100);
          okButton.click();
          browser.sleep(1000);
        }
      });
    expect((await page.getHeading().getText()).toLowerCase()).toEqual(
      CONFIGURATIONS.generalConstants.signIn
    );
  });

  it("should be able to provide username and password", async () => {
    page.fillInSignInForm('email',browser.params.login.user);
    browser.sleep(500)
    page.fillInSignInForm('password',browser.params.login.password);
    browser.sleep(1000)
    const signInButton = page.getSignInButton();
    await browser.wait(ExpectedConditions.visibilityOf(signInButton), 5000, 'SignIn button not found!');
    await signInButton.click()
    browser.waitForAngular()
});
