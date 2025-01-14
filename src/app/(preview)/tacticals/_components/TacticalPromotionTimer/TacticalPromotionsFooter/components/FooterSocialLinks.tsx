import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '@/app/(preview)/tacticals/_utils/constants'

const cmsUrl = process.env.REACT_APP_WEB_CMS

const socialLinks = [
    {
        href: FACEBOOK_URL,
        alt: 'facebook',
        src: `${cmsUrl}/static/img/footer/facebook.png`,
        event: 'redes sociales-facebook',
    },
    {
        href: INSTAGRAM_URL,
        alt: 'instagram',
        src: `${cmsUrl}/static/img/footer/instagram.png`,
        event: 'redes sociales-instagram',
    },
    {
        href: TIKTOK_URL,
        alt: 'tiktok',
        src: `${cmsUrl}/static/img/footer/tiktokIcon.png`,
        event: 'redes sociales-tiktok',
    },
]

export const FooterSocialLinks = () => {
    return (
        <div className="tw-px-2 tw-py-4 lg:tw-pb-0">
            <p className="tw-mn-2 tw-text-base tw-font-bold tw-text-white lg:tw-mb-4">
                Redes sociales
            </p>
            <div className="tw-flex tw-gap-2">
                {socialLinks.map((link, index) => (
                    <a key={index} target="_blank" rel="noreferrer noopener" href={link.href}>
                        <img
                            loading="lazy"
                            alt={link.alt}
                            src={link.src}
                            className="tw-h-6 tw-w-6"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
