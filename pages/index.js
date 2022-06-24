import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Faq from "../components/faq";
import Cta from "../components/cta";
import Testimonials from "../components/testimonials";
import Tabs from "../components/tabs";
import SampleSection from "../components/sampleSection";
import { sampleOne, sampleTwo } from "../components/data";
import Companys from "../components/companys";
import HoleCards from "../components/holeCards";
import Container from "../components/container";

export default function Home() {
  return (
    <>
      <Head>
        <title>HİGH SCORE</title>
        <meta
          name="description"
          content="High Score page built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SampleSection imgPos="right" data={sampleOne} />
      {/* <Tabs /> */}
      <HoleCards />
      <Testimonials />
      <Companys />

      <Faq />

      <Cta />
      <Footer />
    </>
  );
}
