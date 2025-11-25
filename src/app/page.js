import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Faq from "@/components/homepage/Faq";
import Services from "@/components/homepage/Services";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <Services />
      <Faq />
      <Contact />
    </div>
  );
}
