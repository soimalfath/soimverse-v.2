

export interface tabFeed {
    tabFeed: string
}



export interface post {
    post: string
    cover: string
    date: string
    link: string
    title: string
    tags: string[]
}

export interface dataType {
    date: string;
    cover: string;
    content: string;
    id: number;
    categories: string[];
    tags: string[];
    title: string;
    status: string;
    featured_media: string;
    link: string
}

export interface progresiveImage {
    lowResSrc: string
    highResSrc: string
    alt: string
    className: string
}

export interface lottie {
    loop: boolean
    autoplay: boolean
    animation: object
    width: number | string
    height: number | string
}

interface Coordinates {
  longitude: number;
  latitude: number;
  // Jika ada properti lain yang diperlukan, tambahkan di sini
}
export interface geoLocated {
    isGeolocationAvailable: boolean
    isGeolocationEnabled: boolean
    coords? : Coordinates 
}

export interface tabType {
    tabName: string
    value: string
}

export interface selectedType {
    post: string
    date: string
    image: string
    content: string
}

