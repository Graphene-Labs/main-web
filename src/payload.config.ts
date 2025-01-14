// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { getServerSideURL } from './utilities/getURL'
// import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { plugins } from './plugins'
import Logo from './app/(payload)/_components/Logo'
import Icon from './app/(payload)/_components/Icon'
import { Tacticals } from './collections/Landings/Tacticals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        theme: 'light',
        user: Users.slug,
        components: {
            graphics: {
                // icon: Icon,
            },
        },
        meta: {
            title: 'Dashboard',
            titleSuffix: '| Atlantic CMS',
            icons: [
                {
                    url: 'https://www.casinoatlanticcity.com/favicon.ico', // Ruta al favicon
                    sizes: '32x32', // Tamaño del ícono
                    type: 'image/x-icon', // Tipo MIME
                },
            ],
        },
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    editor: lexicalEditor(),
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    collections: [Posts, Media, Categories, Users, Tacticals],
    cors: [getServerSideURL()].filter(Boolean),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    sharp,
    plugins: [
        ...plugins,
        // storage-adapter-placeholder
    ],
})
