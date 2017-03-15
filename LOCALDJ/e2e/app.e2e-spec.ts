import { LOCALDJPage } from './app.po';

describe('localdj App', function() {
  let page: LOCALDJPage;

  beforeEach(() => {
    page = new LOCALDJPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
