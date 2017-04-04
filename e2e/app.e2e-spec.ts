import { CompanydirectoryPage } from './app.po';

describe('companydirectory App', function() {
  let page: CompanydirectoryPage;

  beforeEach(() => {
    page = new CompanydirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
