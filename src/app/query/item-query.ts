export interface Location {
    locationName: string;
    locationGeopoint: {
        latitude: number;
        longitude: number;
    };
}

export interface Price {
    currency: string;
    ratePerHour: number;
}

export interface ItemQuery {
    name: string;
    location: Location;
    photos: Array<string>;
    price: Price;
}
