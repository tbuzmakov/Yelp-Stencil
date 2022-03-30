import { newE2EPage } from '@stencil/core/testing';

describe('recent-activity', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<recent-activity></recent-activity>');

    const element = await page.find('recent-activity');
    expect(element).toHaveClass('hydrated');
  });
});
