import React from 'react'
import NextImage from 'next/image'

const Logo = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                backgroundColor: '#f5f5f5',
                borderBottom: '1px solid #ddd',
            }}
        >
            <NextImage
                src="https://www.casinoatlanticcity.com/static/img/logos/logo-casino.svg"
                alt="Atlantic Logo"
                style={{ maxWidth: '100px', height: 'auto' }}
            />
        </div>
    )
}

export default Logo
