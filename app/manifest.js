export default function manifest() {
    return {
        name: 'Berrin & Bayram',
        short_name: 'Berrin & Bayram',
        description: 'Berrin & Bayram Wedding Ceremony',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/images/manifest/512x512.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
            },
            {
                src: '/images/manifest/192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/images/manifest/512x512.png',
                sizes: '512x512',
                type: 'image/png',
            }
        ],
        screenshots: [
            {
                src: '/images/manifest/mobile.png',
                sizes: '390x844',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/manifest/desktop.png',
                sizes: '1920x1080',
                type: 'image/png',
                form_factor: 'wide',
            }
        ],
    }
}