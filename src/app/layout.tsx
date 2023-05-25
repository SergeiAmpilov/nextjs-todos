import './globals.css'
import { Inter } from 'next/font/google'
import cn from 'classnames';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToDo App',
  description: 'ToDo App created by Sergei Ampilov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ cn(inter.className, 'bg-slate-800 text-slate-100 container mx-auto p-4 bg-no-repeat') }>{children}</body>
    </html>
  )
}
