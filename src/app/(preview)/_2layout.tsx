import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import React from 'react'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

// import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const { isEnabled } = await draftMode()

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="/favicon.ico" rel="icon" sizes="32x32" />
                <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
            </head>
            <body>
                <p>AUUuUUUuuUA!</p>
                {children}
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    metadataBase: new URL(getServerSideURL()),
    openGraph: mergeOpenGraph(),
    twitter: {
        card: 'summary_large_image',
        creator: '@payloadcms',
    },
}
