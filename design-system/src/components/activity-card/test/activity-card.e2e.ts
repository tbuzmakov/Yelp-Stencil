import { newE2EPage } from '@stencil/core/testing';

describe('activity-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<activity-card></activity-card>');

    const element = await page.find('activity-card');
    expect(element).toHaveClass('hydrated');
  });
});
