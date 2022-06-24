import React from "react";
import Card from "../components/card";
import Container from "./container";
import Sectiontitle from "./sectiontitle";

export default function HoleCards() {
  return (
    <>
      <Sectiontitle pretitle="Cards" title="GROEPEN">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam
      </Sectiontitle>

      <Container className=" bg-blue-400 rounded-xl   lg:flex items-stretch ...">
        <Card />
        <Card />
        <Card />
        
      </Container>
    </>
  );
}
