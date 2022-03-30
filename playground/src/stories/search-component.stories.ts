import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Search Component',
} as Meta;

const Template: Story<Components.SearchComponent> = ({ }) => {
  return html`<search-component></search-component>`;
};

export const Default: Story<Components.SearchComponent> = Template.bind({});
Default.args = {
//   first: 'John',
//   last: 'Doe',
};
