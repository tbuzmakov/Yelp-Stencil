import { ActivityCardType } from '../models/activity-card.model';

export const cards: Array<ActivityCardType> = [
    {
        activity: 'addedPhoto',
        user: {
            name: 'Tim',
            avatar: 'n/a'
        },
        photos: ['url', 'url', 'url'],
    },
    {
        activity: 'addedPhoto',
        user: {
            name: 'Kevin',
            avatar: 'n/a'
        },
        photos: ['url', 'url', 'url'],
    },
    {
        activity: 'addedPhoto',
        user: {
            name: 'Jhon',
            avatar: 'n/a'
        },
        photos: ['url', 'url', 'url'],
    },
    {
        activity: 'wroteReview',
        user: {
            name: 'Paul',
            avatar: 'n/a'
        },
        review: {
            description: 'review description',
            raiting: '4'
        }
    },
];




