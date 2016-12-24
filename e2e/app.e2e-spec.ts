import { Lesson01Page } from './app.po';

describe('lesson01 App', function() {
  let page: Lesson01Page;

  beforeEach(() => {
    page = new Lesson01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
