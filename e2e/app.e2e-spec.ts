import { HhvadPage } from './app.po';

describe('hhvad App', function() {
  let page: HhvadPage;

  beforeEach(() => {
    page = new HhvadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
