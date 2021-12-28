import { browser, by, element } from "protractor";

export class KeyCloakPage {
  navigateToKeycloak() {
    return browser.get(
      browser.baseUrl + "ugwu/login"
    ) as Promise<any>;
  }

  getOverlayPopup() {
    return element(by.css("#cookieModalContent.html"));
  }

  getPopupButton() {
    return element(by.css("button[title=Close]"));
  }

  getHeading() {
    return element(by.css(".form-heading"));
  }

  async fillInSignInForm(id, value) {
    await element(by.id(id)).clear();
    browser.sleep(100);
    await element(by.id(id)).sendKeys(value);
  }

  getSignInButton() {
    return element(by.css("button[type=submit]"));
  }

  getUserType() {
    return element(by.css("label[class=label-center header-font]"));
  }
}
