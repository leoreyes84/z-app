import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display card title and get default description portfolio', async () => {
    page.navigateTo('home');
    expect(page.getHomeTitleCard()).toEqual('My Work Experience');
    expect(page.getHomeDescription()).toBeDefined();
  });

  it('should find portfolio by id', async () => {
    page.navigateTo('home');
    page.searchByIdPortfolio('2001');
    expect(page.getHomeDescription()).toBeDefined();
  });

  it('should update the portfolio', async () => {
    let idPortfolio = '3';
    page.navigateTo('#/portfolio/' + idPortfolio);

    let newDescription = 'new description test zemoga'

    page.updateDescription(newDescription);
    page.navigateTo('home');
    page.searchByIdPortfolio(idPortfolio);

    expect(page.getHomeDescription()).toEqual(newDescription);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
