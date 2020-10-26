import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo(component: string) {
    return browser.get(browser.baseUrl + component) as Promise<any>;
  }

  async getHomeTitleCard() {
    return element(by.name('card-title')).getText() as Promise<string>;
  }

  async getHomeDescription() {
    return element(by.css('p#description')).getText() as Promise<string>;
  }

  async searchByIdPortfolio(id: string) {
    element(by.tagName('input')).sendKeys(id);
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
  }

  async getMessageNotFound() {
    return element(by.css('p#textNotFound')).getText() as Promise<string>;
  }

  async updateDescription(newDescription: string) {
    element(by.tagName('textarea')).clear();
    element(by.tagName('textarea')).sendKeys(newDescription);

    element.all(by.className('btn-primary')).first().click();
  }

}
