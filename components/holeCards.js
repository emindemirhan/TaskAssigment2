import React from "react";
import Card from "../components/card";
import Container from "./container";
import SectionTitle from "./sectiontitle";

export default function HoleCards() {
  return (
    <>
      <SectionTitle pretitle="Cards" title="GROEPEN">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam
      </SectionTitle>

      <Container className=" bg-blue-400 rounded-xl  lg:flex items-stretch ...">
        <Card />
        <Card />
        <Card />
        
      </Container>
    </>
  );
}
