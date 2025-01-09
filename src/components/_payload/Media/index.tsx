'use client'
import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'

export const Media: React.FC<Props> = (props) => {
    const { className, htmlElement = 'div', resource } = props

    const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video')
    const Tag = (htmlElement as any) || Fragment
    console.log('isVideo', isVideo)

    // return (
    //     <div>
    //         <p>aua max</p>
    //         <pre>{JSON.stringify(props)}</pre>
    //     </div>
    // )
    return (
        <Tag
            {...(htmlElement !== null
                ? {
                      className,
                  }
                : {})}
        >
            <pre>aua{JSON.stringify(props)}</pre>
            {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
        </Tag>
    )
}
