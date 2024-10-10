import Home from "./(consumer)/home/page";
import Nav from "@/components/navBar/page";
import Footer from "@/components/footer/page";

const HomePage = () => {
  return (
    <main>
      <Nav />
      <Home />
      <Footer />
    </main>
  )
}

export default HomePage;