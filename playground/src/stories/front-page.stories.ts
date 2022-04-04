import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';
import {FrontPageData} from "./../../../design-system/src/global/data/front-page.data"

export default {
  title: 'Front Page',
} as Meta;

const Template: Story<Components.FrontPage> = ({ frontPageEntry }) => {
  
  const frontPage = document.createElement('front-page');
  frontPage.frontPageEntry = FrontPageData;
  
  return frontPage;
};

export const Default: Story<Components.FrontPage> = Template.bind({});
Default.args = { 

};
