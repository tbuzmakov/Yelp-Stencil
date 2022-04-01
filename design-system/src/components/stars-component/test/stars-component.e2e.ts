import { newE2EPage } from '@stencil/core/testing';

describe('stars-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stars-component></stars-component>');

    const element = await page.find('stars-component');
    expect(element).toHaveClass('hydrated');
  });
});
