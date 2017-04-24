import { BsClientPage } from './app.po';

describe('bs-client App', () => {
  let page: BsClientPage;

  beforeEach(() => {
    page = new BsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
