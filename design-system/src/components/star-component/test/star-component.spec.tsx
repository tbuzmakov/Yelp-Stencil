import { newSpecPage } from '@stencil/core/testing';
import { StarComponent } from '../star-component';

describe('star-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StarComponent],
      html: `<star-component></star-component>`,
    });
    expect(page.root).toEqualHtml(`
      <star-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </star-component>
    `);
  });
});
