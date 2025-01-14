'use client'

interface HeroImageProps {
    altDesktop: string
    altMobile: string
    srcDesktop: string
    srcMobile: string
}

interface TacticalPromotionHeroProps {
    heroImage: HeroImageProps
}

export const TacticalPromotionHeroBanner = ({
    heroImage: { altDesktop, altMobile, srcMobile, srcDesktop },
}: TacticalPromotionHeroProps) => {
    return (
        <div className="tw-w-full tw-relative">
            <div className="sm:hidden">
                <img
                    className="tw-w-full tw-bg-no-repeat tw-bg-center tw-bg-contain tw-block"
                    src={srcDesktop}
                    alt={altDesktop}
                />
            </div>
            <div className="hidden sm:block">
                <img
                    className="tw-w-full tw-bg-no-repeat tw-bg-center tw-bg-contain tw-block"
                    src={srcMobile}
                    alt={altMobile}
                />
            </div>
        </div>
    )
}
