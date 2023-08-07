import { ClerkProvider } from '@clerk/nextjs'
export const metadata = {
    title: 'Threads',
    description: 'A next.js app for creating threads'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html

            </html>
        </ClerkProvider>
    )
}