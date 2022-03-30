import { newSpecPage } from '@stencil/core/testing';
import { RecentActivity } from '../recent-activity';

describe('recent-activity', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RecentActivity],
      html: `<recent-activity></recent-activity>`,
    });
    expect(page.root).toEqualHtml(`
      <recent-activity>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </recent-activity>
    `);
  });
});
