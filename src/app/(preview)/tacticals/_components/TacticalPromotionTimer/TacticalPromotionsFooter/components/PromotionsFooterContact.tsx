import Link from 'next/link'

export const PromotionsFooterContact = () => {
    return (
        <div className="tw-px-2 tw-py-4 lg:tw-py-0">
            <p className="tw-text-base tw-font-bold tw-text-white lg:tw-mb-2">Contacto</p>
            <Link href="mailto:soporte@casinoatlanticcity.com">
                <p
                    className="tw-mb-2 tw-cursor-pointer tw-text-xs tw-font-normal tw-text-white tw-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-col-active lg:tw-text-sm"
                    onClick={() => {}}
                >
                    soporte@casinoatlanticcity.com
                </p>
            </Link>
            {/* <LinkSupport>
                <p
                    className="tw-text-xs tw-font-bold tw-text-white lg:tw-text-sm"
                    onClick={() => {
                    }}
                >
                    {SUPPORT_NUMBER}
                </p>
            </LinkSupport> */}
        </div>
    )
}
