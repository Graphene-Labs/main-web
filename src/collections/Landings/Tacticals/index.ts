import type { CollectionConfig } from 'payload'

import {
    BlocksFeature,
    FixedToolbarFeature,
    HeadingFeature,
    HorizontalRuleFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../../access/authenticated'
import { authenticatedOrPublished } from '../../../access/authenticatedOrPublished'
import { Banner } from '../../../blocks/Banner/config'
import { Code } from '../../../blocks/Code/config'
import { MediaBlock } from '../../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Tacticals: CollectionConfig<'tacticals'> = {
    slug: 'tacticals',
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticatedOrPublished,
        update: authenticated,
    },
    // This config controls what's populated by default when a post is referenced
    // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
    // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
    defaultPopulate: {
        title: true,
        slug: true,
        categories: true,
        meta: {
            image: true,
            description: true,
        },
    },
    admin: {
        group: 'Landing Pages',
        defaultColumns: ['title', 'slug', 'updatedAt'],
        livePreview: {
            url: ({ data, req }) => {
                const path = generatePreviewPath({
                    slug: typeof data?.slug === 'string' ? data.slug : '',
                    collection: 'tacticals',
                    req,
                })

                return path
            },
        },
        preview: (data, { req }) =>
            generatePreviewPath({
                slug: typeof data?.slug === 'string' ? data.slug : '',
                collection: 'tacticals',
                req,
            }),
        useAsTitle: 'title',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'heroImage',
                            type: 'upload',
                            relationTo: 'media',
                            label: 'Imagen de Hero (Desktop)',
                            admin: {
                                width: '50%',
                                className: 'hero-image-field', // Clase personalizada para el campo
                            },
                        },
                        {
                            name: 'heroImageMobile',
                            type: 'upload',
                            relationTo: 'media',
                            label: 'Imagen de Hero (Mobile)',
                            admin: {
                                width: '50%',
                                className: 'hero-image-mobile-field', // Clase personalizada para el campo
                            },
                        },
                        {
                            name: 'content',
                            type: 'richText',
                            editor: lexicalEditor({
                                features: ({ rootFeatures }) => {
                                    return [
                                        ...rootFeatures,
                                        HeadingFeature({
                                            enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
                                        }),
                                        BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                                        FixedToolbarFeature(),
                                        InlineToolbarFeature(),
                                        HorizontalRuleFeature(),
                                    ]
                                },
                            }),
                            label: false,
                            required: true,
                        },
                    ],
                    label: 'Configuraciones',
                },
                {
                    fields: [],
                    label: 'Contenido',
                },
                {
                    fields: [
                        {
                            name: 'relatedPosts',
                            type: 'relationship',
                            admin: {
                                position: 'sidebar',
                            },
                            filterOptions: ({ id }) => {
                                return {
                                    id: {
                                        not_in: [id],
                                    },
                                }
                            },
                            hasMany: true,
                            relationTo: 'tacticals',
                        },
                        {
                            name: 'categories',
                            type: 'relationship',
                            admin: {
                                position: 'sidebar',
                            },
                            hasMany: true,
                            relationTo: 'categories',
                        },
                    ],
                    label: 'TyC',
                },
                {
                    name: 'meta',
                    label: 'SEO',
                    fields: [
                        OverviewField({
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                            imagePath: 'meta.image',
                        }),
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaImageField({
                            relationTo: 'media',
                        }),

                        MetaDescriptionField({}),
                        PreviewField({
                            // if the `generateUrl` function is configured
                            hasGenerateFn: true,

                            // field paths to match the target field for data
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                        }),
                    ],
                },
            ],
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
                position: 'sidebar',
            },
            hooks: {
                beforeChange: [
                    ({ siblingData, value }) => {
                        if (siblingData._status === 'published' && !value) {
                            return new Date()
                        }
                        return value
                    },
                ],
            },
        },
        ...slugField(),
    ],
    hooks: {
        afterChange: [revalidatePost],
        afterRead: [populateAuthors],
        afterDelete: [revalidateDelete],
    },
    versions: {
        drafts: {
            autosave: {
                interval: 1000, // We set this interval for optimal live preview
            },
        },
        maxPerDoc: 50,
    },
}
