import Link from 'next/link'

export const TacticalPromotionFooterLogos = () => {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-8 tw-px-3 tw-py-1 lg:tw-gap-12 lg:tw-py-0">
            <Link className="tw-flex tw-items-center lg:tw-h-[48px]" href={'/'}>
                <img
                    loading="lazy"
                    alt="casino"
                    src={'https://www.casinoatlanticcity.com/static/img/logos/logo-casino.svg'}
                    className="tw-h-[32px] tw-w-[150px] min-[380px]:tw-h-[48px] min-[380px]:tw-w-[170px] lg:tw-h-[48px] lg:tw-w-[300px]"
                />
            </Link>
        </div>
    )
}
