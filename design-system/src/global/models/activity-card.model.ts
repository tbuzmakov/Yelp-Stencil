export interface ActivityCardType {
    activity: "addedPhoto" | "wroteReview",
    placeName: string,
    user: {
        name: string;
        avatar: string;
    },
    photos?: Array<string>,
    review?: {
        description: string,
        raiting: "1" | "2" | "3" | "4" | "5" 
    },

}