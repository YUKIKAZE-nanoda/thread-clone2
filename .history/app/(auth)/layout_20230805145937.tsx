import { ClerkProvider } from '@clerk/nextjs'
export const metadata = {
    title: 'Threads',
    description: 'A next.js app for creating threads'
}
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={}>

                </body>
            </html>
        </ClerkProvider>
    )
}