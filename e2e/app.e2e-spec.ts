import { TestBloblrPage } from './app.po';

describe('test-bloblr App', () => {
  let page: TestBloblrPage;

  beforeEach(() => {
    page = new TestBloblrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
