import React from "react";
import Container from "./container";

export default function Design(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
    {props.children}
      
    </Container>
  );
}
