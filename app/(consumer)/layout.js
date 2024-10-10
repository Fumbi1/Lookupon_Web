
import Nav from "@/components/navBar/page";
import Footer from "@/components/footer/page";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
