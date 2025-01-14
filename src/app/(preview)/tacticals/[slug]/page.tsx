import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
// import { PayloadRedirects } from '@/components/_payload/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
// import RichText from '@/components/_payload/RichText'

import type { Post } from '@/payload-types'

// import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/_payload/LivePreviewListener'
import { PostHero } from '@/components/_payload/heros/PostHero'
import { TacticalLandingHero } from '@/components/_payload/heros/TacticalLandingHero'
import LandingBase from '../_layout/LandingBase'
import { TacticalPromotionSteps } from '../_components/StepsPromotion/StepsPromotion'
import { TacticalPromotionTimer } from '../_components/TacticalPromotionTimer/TacticalPromotionTimer'
import { TacticalPromotionsTyC } from '../_components/T&C/TacticalPromotionsTyC'
import { Prize } from './_components/Prize'

export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
        collection: 'posts',
        draft: false,
        limit: 1000,
        overrideAccess: false,
        pagination: false,
        select: {
            slug: true,
        },
    })

    const params = posts.docs.map(({ slug }) => {
        return { slug }
    })

    return params
}

type Args = {
    params: Promise<{
        slug?: string
    }>
}

export default async function Post({ params: paramsPromise }: Args) {
    const { isEnabled: draft } = await draftMode()
    const { slug = '' } = await paramsPromise
    const url = '/posts/' + slug
    const post = await queryPostBySlug({ slug })

    // console.log('aua maximo', post)

    // if (!post) return <PayloadRedirects url={url} />
    return (
        <article className="pt-0 pb-16">
            {draft && (
                <>
                    <LivePreviewListener />
                </>
            )}

            <div className="landing-cineplanet">
                <LandingBase post={post}>
                    <TacticalPromotionSteps
                        includes="1 Pop Corn Grande + 2 Bebidas Medianas + 2 Entradas Full"
                        namePromo="cineplanet"
                        steps={[
                            {
                                title: 'Regístrate con el código promocional',
                                description: 'El código es: ',
                                code: 'CINE',
                            },
                            {
                                title: 'Elige un Bono de Bienvenida',
                                description: 'El de tu preferencia.',
                            },
                            {
                                title: 'Deposita desde S/59 o $16 y ¡ganaste!',
                                description: 'Recibirás tu premio por correo.',
                            },
                        ]}
                    />
                    <TacticalPromotionTimer namePromo="cineplanet" />
                    <TacticalPromotionsTyC
                        namePromo="cineplanet"
                        codePromo="CINE"
                        datePromo="18 de noviembre del 2024 desde las 00:00 horas hasta el 30 de noviembre de 2024 a las 11:59 PM"
                        deposit="S/59 o $16"
                        businessDays={10}
                        numberOfCupons={500}
                        numberMaxCupons={1}
                    >
                        <Prize />
                    </TacticalPromotionsTyC>
                </LandingBase>
            </div>
            <pre>{JSON.stringify(post)}</pre>
        </article>
    )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise
    const post = await queryPostBySlug({ slug })

    return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'tacticals',
        draft,
        limit: 1,
        overrideAccess: draft,
        pagination: false,
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    return result.docs?.[0] || { content: '', relatedPosts: [] }
})
