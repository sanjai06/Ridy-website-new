import { Urbanist, Nunito } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Ridy - The Lady Cab',
    template: 'Ridy - The Lady Cab',
  },
  description: 'Ridy - The Lady Cab',
  openGraph: {
    title: 'Ridy - The Lady Cab',
    description: 'Ridy - The Lady Cab',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> 
        <meta name="author" content="Ridy Lady Cab" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
