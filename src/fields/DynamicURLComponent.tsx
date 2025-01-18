import { FieldClientComponent } from 'payload'
import React, { useState, useEffect } from 'react'

// Este es el componente funcional que se ajusta a las expectativas de Payload.
const DynamicURLComponent: FieldClientComponent = ({ field, setData, data }: any) => {
    const [slug, setSlug] = useState(data?.slug || '')

    const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSlug = event.target.value
        setSlug(newSlug)
        setData({ ...data, slug: newSlug }) // Actualiza el slug en el estado del formulario
    }

    const landingURL = `www.casino.com/landing/${slug}`

    useEffect(() => {
        if (data) {
            setSlug(data.slug)
        }
    }, [data])

    return (
        <div>
            <label>Slug</label>
            <input
                type="text"
                value={slug}
                onChange={handleSlugChange}
                placeholder="Introduce el slug"
            />
            <br />
            <label>Landing URL:</label>
            <div style={{ padding: '10px', background: '#f3f3f3', borderRadius: '4px' }}>
                <strong>URL Dinámica:</strong>
                <a href={`https://${landingURL}`} target="_blank" rel="noopener noreferrer">
                    {landingURL}
                </a>
            </div>
        </div>
    )
}

export default DynamicURLComponent
