'use client'

import {
    FooterSeparator,
    FooterSocialLinks,
    FooterValidationSeals,
    PromotionsFooterContact,
    TacticalPromotionFooterCopyright,
    TacticalPromotionFooterLogos,
} from './components'

import Link from 'next/link'

export const TacticalPromotionFooter = () => {
    return (
        <footer className="tw-bg-[#222226]">
            <div className="tw-px-4 tw-py-8 lg:tw-px-[72px] lg:tw-py-12">
                <div className="tw-grid tw-py-3 tw-pb-0 lg:tw-grid-cols-3 lg:tw-justify-items-center lg:tw-gap-12">
                    <PromotionsFooterContact />

                    <FooterSocialLinks />

                    <div className="hidden sm:block">
                        <FooterSeparator />
                    </div>

                    <FooterValidationSeals />
                </div>

                <FooterSeparator />

                <TacticalPromotionFooterLogos />

                <FooterSeparator />

                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-py-4 tw-text-center lg:tw-py-0">
                    <p className="tw-text-sm tw-text-white">
                        Atlantic City Casino & Sports es operado por Corporación Turística Curacao
                        B.V., empresa domiciliada en Curazao con KVK N°153268 y autorizada por el
                        Ministerio de Comercio Exterior y Turismo - MINCETUR - para operar con las
                        licencias N°11002577010000 y N°21002577010000.
                    </p>

                    <p className="tw-text-sm tw-text-white">
                        Los juegos y apuestas deportivas a distancia realizados en exceso pueden
                        causar ludopatía.
                    </p>

                    <p className="tw-text-sm tw-text-white">
                        Tienes problemas con el juego?{' '}
                        <Link
                            className="tw-text-sm tw-font-normal tw-text-white tw-underline"
                            target="_blank"
                            href="https://www.gob.pe/765-inscribirse-en-el-registro-de-personas-prohibidas-a-acceder-a-juegos-de-casinos-y-maquinas-tragamonedas"
                        >
                            Infórmate aquí.
                        </Link>
                    </p>
                </div>
            </div>

            <TacticalPromotionFooterCopyright />
        </footer>
    )
}
