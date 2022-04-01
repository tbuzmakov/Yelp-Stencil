import { newSpecPage } from '@stencil/core/testing';
import { StarsComponent } from '../stars-component';

describe('stars-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StarsComponent],
      html: `<stars-component></stars-component>`,
    });
    expect(page.root).toEqualHtml(`
      <stars-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stars-component>
    `);
  });
});
