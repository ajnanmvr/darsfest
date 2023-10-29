"use client";
import React from "react";
import { useParams } from "next/navigation";
import Data from "../../../data/FullData.json";

function DarsDetails() {
  const { slug } = useParams();

  // Find the darsname corresponding to the slug
  const selectedDars = Data.find((item) => item.slug === slug);
  const darsData = Data.filter((item) => item.slug === slug);
  if (!selectedDars) {
    return <div>No data found for this slug.</div>;
  }

  return (
    <div>
      <h1>{selectedDars.darsname}</h1>
      {darsData.map((v, i) => (
        <h1 key={i}>{v.name}</h1>
      ))}
    </div>
  );
}

export default DarsDetails;
