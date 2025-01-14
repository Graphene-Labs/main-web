import { HideChatElement } from '../_components/HideChatElement'
import { TacticalPromotionFooter } from '../_components/TacticalPromotionTimer/TacticalPromotionsFooter/TacticalPromotionFooter'
import { TacticalPromotionHeader } from '../_components/TacticalPromotionHeader'
import { TacticalPromotionHeroBanner } from '../_components/TacticalPromotionHeroBanner'
import { TacticalLandingHero } from '@/components/_payload/heros/TacticalLandingHero'

interface HeroImageProps {
    altDesktop: string
    altMobile: string
    srcDesktop: string
    srcMobile: string
}

interface LandingBaseProps {
    children?: React.ReactNode
    post: any
}

export default function LandingBase({ children, post }: LandingBaseProps) {
    return (
        <>
            <HideChatElement />
            <TacticalLandingHero post={post} />
            {/* <TacticalPromotionHeader namePromo={namePromo} /> */}
            {/* <TacticalPromotionHeroBanner heroImage={heroImage} /> */}
            {children}
        </>
    )
}
