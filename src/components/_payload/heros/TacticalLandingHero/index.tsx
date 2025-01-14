import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/_payload/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import NextImage from 'next/image'
import { cn } from '@/utilities/cn'

export const TacticalLandingHero: React.FC<{
    post: Post
}> = ({ post }) => {
    const { categories, heroImage, populatedAuthors, publishedAt, title } = post

    const hasAuthors =
        populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

    return (
        <div className="relative flex items-end">
            <div className="w-full select-none aspect-[46/15]">
                {heroImage && typeof heroImage !== 'string' && (
                    <Media
                        fill
                        priority
                        imgClassName="-z-10 object-cover object-center"
                        resource={heroImage}
                    />
                )}
            </div>
        </div>
    )
}
