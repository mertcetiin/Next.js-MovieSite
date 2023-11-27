import '@/styles/reset.css';
import '@/styles/global.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
