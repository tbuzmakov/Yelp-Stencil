import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Rating',
} as Meta;

const Template: Story<Components.StarsComponent> = ({ }) => {
  return html`<stars-component></stars-component>`;
};

export const Default: Story<Components.MyComponent> = Template.bind({});
Default.args = {
  
};
