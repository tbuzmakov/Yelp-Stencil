export interface ActivityCardType {
    activity: "addedPhoto" | "wroteReview",
    placeName: string,
    user: {
        name: string;
        avatar: string;
    },
    placePhoto?: string;
    photos?: Array<string>,
    likes?: number,
    review?: {
        description: string,
        rating: 0 | 1 | 2 | 3 | 4 | 5, 
    },

}