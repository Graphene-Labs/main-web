'use client'

import { useState } from 'react'

import styles from './tactical-promotions-tyc.module.scss'
import { ChevronDown } from 'lucide-react'

interface TacticalPromotionsTyCProps {
    businessDays: number
    codePromo: string
    datePromo: string
    deposit: string
    namePromo?: string
    numberMaxCupons: number
    numberOfCupons: number
    children: React.ReactNode
}

export const TacticalPromotionsTyC = ({
    codePromo,
    children,
    datePromo,
    numberMaxCupons,
    numberOfCupons,
}: TacticalPromotionsTyCProps) => {
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <div className={styles.container}>
            <div className={styles.accordion}>
                <div className={styles.accordion__header}>
                    <button
                        onClick={() => {
                            setIsExpanded((prev) => !prev)
                            // tagTyCLanding()
                        }}
                    >
                        Términos y Condiciones
                        <div className={styles.icon} aria-expanded={isExpanded}>
                            <ChevronDown fill="#fff" />
                        </div>
                    </button>
                </div>

                <div className={styles.accordion__content} aria-expanded={isExpanded}>
                    <div className={styles['accordion__content-info']} aria-expanded={isExpanded}>
                        <div>
                            <h3>Vigencia</h3>
                            <p>
                                Esta campaña estará vigente desde el <strong>{datePromo}</strong>.
                            </p>
                        </div>

                        <div>
                            <h3>Mecánica</h3>
                            <p className="tw-mb-4">
                                Para ganar tu vale sin sorteos, deberás realizar lo siguiente:
                            </p>

                            <ol className={styles.list}>
                                <li>
                                    Regístrate en nuestra web y utiliza el código promocional:
                                    <strong> {codePromo}</strong>
                                </li>

                                <li>
                                    Escoge un <strong> Bono de Bienvenida.</strong>
                                </li>

                                <li>
                                    Una vez validado tu depósito, recibirás un correo electrónico
                                    con los 4 cupones de la promoción (puede tardar hasta 10 días
                                    hábiles).
                                </li>

                                <li>
                                    Se entregarán cupones hasta agotar el Stock ({numberOfCupons}{' '}
                                    cupones).
                                </li>

                                <li>
                                    Se entregarán {numberMaxCupons} cupones de s/10 por invitado.
                                </li>
                            </ol>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
