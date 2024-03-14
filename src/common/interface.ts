

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

export interface geoLocated {
    coords: object 
    isGeolocationAvailable: boolean
    isGeolocationEnabled: boolean
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