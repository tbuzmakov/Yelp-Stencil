import { newSpecPage } from '@stencil/core/testing';
import { ActivityCardComponent } from '../activity-card';

describe('activity-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ActivityCardComponent],
      html: `<activity-card></activity-card>`,
    });
    expect(page.root).toEqualHtml(`
      <activity-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </activity-card>
    `);
  });
});
