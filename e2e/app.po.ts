import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainText() {
    return element(by.css('app-root h1')).getText();
  }
  getHomeButton() {
    return element(by.css('[routerlink="/home"]'));
  }
  getFormButton() {
    return element(by.css('[routerlink="/form"]'));
  }
  getAboutButton() {
    return element(by.css('[routerlink="/about"]'));
  }
  getSearchButton() {
    return element(by.css('form button'));
  } 
  getHomeHeading() {
    return element(by.css('app-home h2')).getText();
  }
  getCLickButton() {
    return element(by.css('app-home button'));
  }
  displayForm() {
    return element(by.css('app-form form'));
  }
  getFormHeading() {
    return element(by.css('app-form form h2')).getText();
  }
  getSubmitButton() {
    return element(by.css('app-form form button'));
  }
  getAboutHeading() {
    return element(by.css('app-about h2')).getText();
  }
  
}
