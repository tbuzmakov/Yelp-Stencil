import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Activity Card',
} as Meta;

const Template: Story<Components.ActivityCard> = ({ post }) => {
  
  const activityCard = document.createElement('activity-card');
  activityCard.post = post;
  
  return activityCard;
};

export const Default: Story<Components.ActivityCard> = Template.bind({});
Default.args = {
    post: {
        activity: 'addedPhoto',
        placeName: 'Fukuroku Express',
        user: {
            name: 'Jennifer A.',
            avatar: 'https://www.thefamouspeople.com/profiles/thumbs/jennifer-aniston-1.jpg'
        },
        photos: ['https://hips.hearstapps.com/hmg-prod/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg',
                 'url'],
    }
};