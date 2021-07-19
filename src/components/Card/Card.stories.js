import React from "react";
import Card from "./Card";

export default {
  component: Card,
  title: "Components/Card",
};

export const CardStory = () => (
  <Card
    image="https://qph.fs.quoracdn.net/main-qimg-2aa3d98732c7bc64d9c8e2e1584b3e7a.webp"
    score="2"
  />
);
