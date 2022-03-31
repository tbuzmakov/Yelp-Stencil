import { ActivityCardType } from '../models/activity-card.model';

export const cards: Array<ActivityCardType> = [
    {
        activity: 'addedPhoto',
        placeName: 'Fukuroku Express',
        user: {
            name: 'Jennifer A.',
            avatar: 'https://www.thefamouspeople.com/profiles/thumbs/jennifer-aniston-1.jpg'
        },
        photos: ['https://www.thespruceeats.com/thmb/I_M3fmEbCeNceaPrOP5_xNZ2xko=/3160x2107/filters:fill(auto,1)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg', 'url'],
    },
    {
        activity: 'addedPhoto',
        placeName: 'Fukuroku Express',
        user: {
            name: 'Angelica W.',
            avatar: 'https://theactorispresent.kr/drmvsn/wp-content/uploads/2021/03/lsy-1x1-img.jpg?x47117'
        },
        photos: ['https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=', 'url', 'url'],
    },
    {
        activity: 'addedPhoto',
        placeName: 'Fukuroku Express',
        user: {
            name: 'Cathryn O.',
            avatar: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/Karlie-Kloss-mc-1x1-220120-f38d9b.jpg'
        },
        photos: ['https://static01.nyt.com/images/2022/03/30/dining/25Appe-promo/merlin_202627353_46e605bd-d594-4eeb-9abe-356d9c2fce73-threeByTwoMediumAt2X.jpg', 'url', 'url'],
    },
    {
        activity: 'wroteReview',
        placeName: 'Fukuroku Express',
        user: {
            name: 'Paul',
            avatar: 'data:image/jpeg;base64,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'
        },
        review: {
            description: 'review description',
            raiting: '4'
        }
    },
];



