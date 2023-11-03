import './globals.css'


export const metadata = {
  title: 'Make it differently',
  description: 'Generated by create next app',
  favicon: '/favicon.ico',
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">

      <body>{children}</body>
    </html>
  )
}