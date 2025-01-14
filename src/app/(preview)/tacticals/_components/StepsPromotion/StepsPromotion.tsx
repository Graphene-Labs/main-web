'use client'

import { useRouter } from 'next/navigation'
import { TacticalPromotionButton } from '../TacticalPromotionButton'

import './steps-promotion.scss'

interface Step {
    code?: string
    description: string
    title: string
}

interface TacticalPromotionStepsProps {
    includes: string
    namePromo: string
    steps?: Step[]
}

export const TacticalPromotionSteps = ({
    includes,
    namePromo,
    steps,
}: TacticalPromotionStepsProps) => {
    const router = useRouter()

    const handleNavigateRegister = () => {
        if (namePromo === 'burger king') {
            // tagBurgerKingRegister(namePromo, 'mid');
        } else {
            // tagLandingStepsRegister(namePromo);
        }

        router.push('/registro?promo=CINE')
    }

    return (
        <div className="steps-container">
            <div className="steps-container__include-food">
                <h2 className="steps-container__subtitle">¿Qué incluye?</h2>
                <p>{includes}</p>
            </div>

            <div className="steps-container__info">
                <h2 className="steps-container__subtitle">¿Cómo participar?</h2>

                <div className="steps-info-grid">
                    {steps?.map((step, index) => (
                        <div className="steps-info-grid__item" key={index}>
                            <div className="step-info-number">
                                <span>{index + 1}</span>
                            </div>
                            <div className="step-info-detail">
                                <h3>{step.title}</h3>
                                <p>
                                    {step.description}
                                    {step.code && <span>{step.code}</span>}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="tw-relative tw-z-[2] tw-flex tw-w-full tw-items-center tw-justify-center">
                <TacticalPromotionButton
                    className="tw-relative tw-w-full tw-max-w-full tw-px-2 tw-py-3 tw-text-[14px] md:tw-min-w-[330px] md:tw-max-w-min md:tw-px-4 lg:tw-py-[15px]"
                    onClick={handleNavigateRegister}
                >
                    Regístrate
                </TacticalPromotionButton>
            </div>
        </div>
    )
}
