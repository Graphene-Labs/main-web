export const TacticalPromotionFooterCopyright = () => {
    const year = new Date().getFullYear()

    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#d7b730] tw-px-4 tw-py-[14px]">
            <span className="tw-w-full tw-text-center tw-text-base tw-font-bold lg:tw-px-[72px] lg:tw-text-[18px]">
                <div className="sm:hidden">
                    {' '}
                    {year} © Atlantic City. <br /> Todos los derechos reservados.
                </div>
                <div className="hidden sm:block">
                    {year} © Atlantic City. Todos los derechos reservados.
                </div>
            </span>
        </div>
    )
}
