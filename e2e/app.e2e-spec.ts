import { IssueManagementPage } from './app.po';

describe('issue-management App', () => {
  let page: IssueManagementPage;

  beforeEach(() => {
    page = new IssueManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
