
import "./globals.css";
import Footer from "./components/layot/Footer";
import Heder from "./components/layot/Header";
export const metadata = {
  title: "فروشگاه من",
  description: "دیجیکالا",
};




export default function RootLayout({ children }) {
  return (
    <html  lang="fa" dir="rtl">
      <body  className="w-full"
      >
        <main className="flex container mx-auto p-0 bg-white relative flex-col">

           <Heder/>
           <section className="min-h-screen  grow">

              {children}

           </section>
           <Footer/>

        </main>
      
      </body>
    </html>
  );
}
