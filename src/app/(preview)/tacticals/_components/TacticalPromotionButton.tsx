import { MouseEventHandler } from 'react';

interface TacticalPromotionButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const TacticalPromotionButton = ({
    children,
    onClick,
    className,
}: TacticalPromotionButtonProps) => {
    return (
        <button
            className={`tw-max-w-[150px] tw-rounded-[8px] tw-border-none tw-bg-[#d7b730] tw-px-2 tw-py-2 tw-text-[10px] tw-font-bold tw-uppercase tw-text-[#111] tw-shadow-md tw-shadow-[#21212133] tw-outline-none tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-cursor-pointer hover:tw-bg-col-hover md:tw-px-4 md:tw-py-2 md:tw-text-[14px] ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
