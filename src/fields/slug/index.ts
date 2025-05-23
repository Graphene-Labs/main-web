import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from './formatSlug'

type Overrides = {
    slugOverrides?: Partial<TextField>
    checkboxOverrides?: Partial<CheckboxField>
}

type Slug = (
    fieldToUse?: string,
    path?: string,
    overrides?: Overrides,
) => [TextField, CheckboxField]

export const slugField: Slug = (fieldToUse = 'title', path = '', overrides = {}) => {
    const { slugOverrides, checkboxOverrides } = overrides

    const checkBoxField: CheckboxField = {
        name: 'slugLock',
        type: 'checkbox',
        defaultValue: true,
        admin: {
            hidden: true,
            position: 'sidebar',
        },
        ...checkboxOverrides,
    }

    // Expect ts error here because of typescript mismatching Partial<TextField> with TextField
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const slugField: TextField = {
        name: 'slug',
        type: 'text',
        index: true,
        label: 'Slug',
        ...(slugOverrides || {}),
        hooks: {
            // Kept this in for hook or API based updates
            beforeValidate: [formatSlugHook(fieldToUse)],
        },
        admin: {
            position: 'sidebar',
            ...(slugOverrides?.admin || {}),
            components: {
                Field: {
                    path: '@/fields/slug/SlugComponent#SlugComponent',
                    clientProps: {
                        fieldToUse,
                        checkboxFieldPath: checkBoxField.name,
                    },
                },
            },
        },
    }

    return [slugField, checkBoxField]
}
