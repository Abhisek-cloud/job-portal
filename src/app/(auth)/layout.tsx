export const metadata = {
  title: 'signin/signup',
  description: 'Generated by Next.js',
}
import "@/app/globals.css"
import { Toaster } from 'react-hot-toast';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
        <Toaster />
      </body>
    </html>
  )
}
