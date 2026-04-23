import Header from "./_components/Header";
import "@/app/_styles/globals.css";
//import the name of google font
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

//storing the font in a variable to use it in the body
const josefin = Josefin_Sans({
  // use latin if all strings are in english
  subsets: ["latin"],
  // smooth transition and display a default font while downloading the wanted one
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "The Wild Oasis is a nature-inspired website that offers a serene escape from the hustle and bustle of everyday life. Explore our collection of cabins nestled in picturesque landscapes, perfect for a peaceful retreat. Discover the beauty of nature and unwind in our cozy accommodations. Whether you're seeking a weekend getaway or a longer vacation, The Wild Oasis has the perfect cabin for you. Embrace tranquility and reconnect with nature at The Wild Oasis.",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} antialiased bg-primary-950 min-h-screen text-primary-100 flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">
            {/* children is the current page just as the outlet */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
