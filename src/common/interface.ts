

export interface tabFeed {
    tabFeed: string
}

export interface post {
    post: string
    image: string
    date: string
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
}

