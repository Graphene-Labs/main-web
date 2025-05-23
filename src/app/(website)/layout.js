import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css'
import 'swiper/css/bundle'
import 'react-modal-video/css/modal-video.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-photo-view/dist/react-photo-view.css'

import '@/assets/css/font-awesome.min.css'
import '@/assets/css/flaticon-set.css'

import '@/assets/css/animate.min.css'
import '@/assets/css/validnavs.css'

import '@/assets/css/unit-test.css'
import '@/assets/css/style.css'
import './globals.css'

import { Manrope } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import Dependency from '@/components/utilities/Dependency'

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Graphene Labs - Digital Transformation',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/img/favicon.png" type="image/png" />
            </head>
            <body className={`${manrope.className}`}>
                <ToastContainer />
                <Dependency />
                {children}
                <div id="modal-root-content" />
            </body>
        </html>
    )
}
