import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'My Component',
} as Meta;

const Template: Story<Components.MyComponent> = ({ first, last }) => {
  return html`<my-component first="${first}" last="${last}"></my-component>`;
};

export const Default: Story<Components.MyComponent> = Template.bind({});
Default.args = {
  first: 'John',
  last: 'Doe',
};
