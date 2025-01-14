'use client';

import { useEffect } from 'react';

export const HideChatElement = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            const chatElement = document.querySelector('.cx-widget') as HTMLElement;

            if (chatElement) {
                chatElement.style.display = 'none';
                clearInterval(intervalId);
            }
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return null;
};
