export const FooterValidationSeals = () => {
    const cmsUrl = process.env.REACT_APP_WEB_CMS

    return (
        <div
            className={
                'tw-flex tw-items-center tw-justify-center tw-gap-2 tw-py-4 lg:tw-gap-4 lg:tw-px-2 lg:tw-py-4 lg:tw-pb-0'
            }
        >
            <img
                loading="lazy"
                alt="escudoAzul"
                className="tw-h-8 tw-w-8"
                src={cmsUrl + '/static/img/footer/escudoAzul.svg'}
                onClick={() => {}}
            />

            <img
                loading="lazy"
                alt="mas18"
                className="tw-h-8 tw-w-8"
                src={cmsUrl + '/static/img/footer/mas18.svg'}
                onClick={() => {}}
            />
        </div>
    )
}
