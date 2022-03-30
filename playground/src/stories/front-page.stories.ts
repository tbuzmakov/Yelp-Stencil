import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Fron Page',
} as Meta;

const Template: Story<Components.FrontPage> = ({ randomPlace }) => {
  
  const frontPage = document.createElement('front-page');
  frontPage.randomPlace = randomPlace;
  
  return frontPage;
  // return html`<front-page></front-page>`;
};

export const Default: Story<Components.FrontPage> = Template.bind({});
Default.args = {
    
    randomPlace: {
      title: "Revival",
      photoBy: "Ashley C.",
      imageURL: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/8c/6d/99/dark-vader-burger.jpg',
    }
};
