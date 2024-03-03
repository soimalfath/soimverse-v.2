

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
    animation: any
    width: number | string
    height: number | string
}