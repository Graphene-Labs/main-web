'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { TacticalPromotionButton } from './TacticalPromotionButton'

interface TacticalPromotionHeaderProps {
    namePromo: string
}

export const TacticalPromotionHeader = ({ namePromo }: TacticalPromotionHeaderProps) => {
    const router = useRouter()

    const handleNavigateRegister = () => {
        if (namePromo === 'burger-king') {
            // tagBurgerKingRegister(namePromo, 'top')
        } else {
            // tagRegister(namePromo)
        }

        router.push('/registro?promo=CINE')
    }

    return (
        <header className="justify-content-between tw-fixed tw-top-0 tw-z-10 tw-flex tw-h-[56px] tw-w-full tw-items-center tw-bg-[#111] tw-px-6 tw-py-2 md:tw-h-[68px] md:tw-px-[72px] md:tw-py-4">
            <Link
                className="tw-h-[16px] md:tw-h-[26px]"
                href="/"
                // onClick={() => tagGoToPagePrincipal(namePromo)}
            >
                <img
                    loading="lazy"
                    alt="casino"
                    src={'https://www.casinoatlanticcity.com/static/img/logos/logo-casino.svg'}
                    className="tw-h-[32px] tw-w-[150px] min-[380px]:tw-h-[48px] min-[380px]:tw-w-[170px] lg:tw-h-[48px] lg:tw-w-[300px]"
                />
            </Link>

            <TacticalPromotionButton onClick={handleNavigateRegister}>
                Regístrate
            </TacticalPromotionButton>
        </header>
    )
}
