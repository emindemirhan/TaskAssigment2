import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Faq from "../components/faq";
import Cta from "../components/cta";
import Testimonials from "../components/testimonials";
// import Tabs from "../components/tabs"; ill work on it later
import SampleSection from "../components/sampleSection";
import { sampleOne, sampleTwo } from "../components/data";
import Companys from "../components/companys";
import HoleCards from "../components/holeCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>HİGH SCORE</title>
        <meta
          name="High Score"
          content="High Score page built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      {/* in the sampleSection you can change img position riht or left and also you can change img as samleOne and sampleTwo data will changing too */}
      <SampleSection imgPos="right" data={sampleOne} />
      <HoleCards />
      <Testimonials />
      <Companys />

      <Faq />

      <Cta />
      <Footer />
    </>
  );
}
