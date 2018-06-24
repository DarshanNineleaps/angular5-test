import { AppPage } from './app.po';

describe('Angular5 e2e', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('Welcome Page', () => {
    it('should display welcome message', () => {
      page.navigateTo();
      expect(page.getMainText()).toEqual('Welcome to app!');
    });
  });

  describe('Navigation Bar', () => {
    it('should have a Home button in navigation bar', () => {
      page.navigateTo();
      expect(page.getHomeButton().getText()).toEqual('Home');
    });
  
    it('should have a Form button in navigation bar', () => {
      page.navigateTo();
      expect(page.getFormButton().getText()).toEqual('Form');
    });
  
    it('should have a About button in navigation bar', () => {
      page.navigateTo();
      expect(page.getAboutButton().getText()).toEqual('About');
    });
  
    it('should have a Search button in navigation bar', () => {
      page.navigateTo();
      expect(page.getSearchButton().isDisplayed()).toBeTruthy();
    });
  });
  
  describe('Home Page', () => {
    it('should route to Home Page on click of Home in nav bar ', () => {
      page.navigateTo();
      page.getHomeButton().click();
      expect(page.getHomeHeading()).toEqual('Home Page');
    });
  
    it('should display Click Me button on click of Home in nav bar ', () => {
      page.navigateTo();
      page.getHomeButton().click();
      expect(page.getCLickButton().getText()).toEqual('Click Me!');
    });
  });
  
  describe('Form Page', () => {
    it('should route to Form Page on click of Form in nav bar ', () => {
      page.navigateTo();
      page.getFormButton().click();
      expect(page.getFormHeading()).toEqual('Form Page');
    });
    
    it('should display the form after routing to Form page', () => {
      page.navigateTo();
      page.getFormButton().click();
      expect(page.displayForm().isDisplayed()).toBeTruthy();
    });

    it('should display Submit button after routing to Form page', () => {
      page.navigateTo();
      page.getFormButton().click();
      expect(page.getSubmitButton().isDisplayed()).toBeTruthy();
    });
  });
  
  describe('About Page', () => {
    it('should route to About Page on click of About in nav bar ', () => {
      page.navigateTo();
      page.getAboutButton().click();
      expect(page.getAboutHeading()).toEqual('About Page');
    });
  });
  
});