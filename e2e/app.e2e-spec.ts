import { TaskManagerPage } from './app.po';

describe('task-manager App', () => {
  let page: TaskManagerPage;

  beforeEach(() => {
    page = new TaskManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
