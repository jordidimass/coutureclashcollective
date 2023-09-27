// app/layout.tsx
import './globals.css'
import Nav from '@/components/nav';
import {Providers} from "@/app/providers";
import Footer from '@/components/footer';
export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
      <Nav/>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}