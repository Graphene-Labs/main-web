'use client'

import { useEffect, useState } from 'react'
import './tactical-promotion-timer.scss'
import clsx from 'clsx'

interface TacticalPromotionTimerProps {
    namePromo?: string
}

export const TacticalPromotionTimer = ({ namePromo }: TacticalPromotionTimerProps) => {
    const [days, setDays] = useState<string>('00')
    const [hours, setHours] = useState<string>('00')
    const [minutes, setMinutes] = useState<string>('00')
    const [seconds, setSeconds] = useState<string>('00')

    useEffect(() => {
        let endDate

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        namePromo === 'burger king'
            ? (endDate = new Date(2024, 9, 27, 23, 59, 0, 0))
            : (endDate = new Date(2024, 10, 30, 23, 59, 0, 0))

        const calculateDifference = () => {
            const now = new Date()
            const difference = endDate.getTime() - now.getTime()

            if (difference <= 0) {
                setDays('00')
                setHours('00')
                setMinutes('00')
                setSeconds('00')
                return
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setDays(String(days).padStart(2, '0'))
            setHours(String(hours).padStart(2, '0'))
            setMinutes(String(minutes).padStart(2, '0'))
            setSeconds(String(seconds).padStart(2, '0'))
        }

        calculateDifference()

        const interval = setInterval(calculateDifference, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={clsx('timer-container', namePromo)}>
            <div className="timer-container__content">
                <h2 className="timer-title">
                    ¡Esta es tu oportunidad de <br />
                    <span>ganar sin sorteos!</span>
                </h2>

                <div className="main-timer">
                    <div className="main-timer__info">
                        <h3>{days}</h3>
                        <p>días</p>
                    </div>

                    <div className="main-timer__info">
                        <h3>{hours}</h3>
                        <p>hrs</p>
                    </div>

                    <div className="main-timer__info">
                        <h3>{minutes}</h3>
                        <p>min</p>
                    </div>

                    <div className="main-timer__info">
                        <h3>{seconds}</h3>
                        <p>seg</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
