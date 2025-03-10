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
  description: 'Ridy - The Lady Cab - Safe & Reliable Rides for Women',
  openGraph: {
    title: 'Ridy - The Lady Cab',
    description: 'Ridy - The Lady Cab - Safe & Reliable Rides for Women',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Ridy Lady Cab" />
        <meta name="keywords" content="lady cab, women taxi, safe ride for women, Ridy cab" />
        <meta name="description" content="Ridy - The Lady Cab - Safe & Reliable Rides for Women" />
        <meta property="og:title" content="Ridy - The Lady Cab" />
        <meta property="og:description" content="Safe & Reliable Rides for Women" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ridyladycab.com" />
        <meta property="og:image" content="/ridy-social-share.jpg" />
        <title>Ridy - The Lady Cab</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> 
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
