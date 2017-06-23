import { NgGalvalumPage } from './app.po';

describe('ng-galvalum App', () => {
  let page: NgGalvalumPage;

  beforeEach(() => {
    page = new NgGalvalumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
