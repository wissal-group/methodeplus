import { App4lavertuPage } from './app.po';

describe('app4lavertu App', function() {
  let page: App4lavertuPage;

  beforeEach(() => {
    page = new App4lavertuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
