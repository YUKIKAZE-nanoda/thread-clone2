import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'
import { dark } from '@clerk/themes'
export const metadata = {
    title: 'Threads',
    description: 'A next.js app for creating threads'
}
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider
            // appearance={
            //     {
            //         baseTheme: dark,
            //     }
            // }
        >
            <html lang='en'>
                <body className={`${inter.className}`}>
                    {
                        children
                    }
                </body>
            </html>
        </ClerkProvider>
    )
}