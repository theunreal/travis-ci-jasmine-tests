import { StatesPage } from './app.po';

describe('states App', () => {
  let page: StatesPage;

  beforeEach(() => {
    page = new StatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
