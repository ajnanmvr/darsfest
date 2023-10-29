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

  const containsNumber1to9 = (values, number) =>
    values.some((value) => value && value.includes(number));
  const containsNumber = (values, number) =>
    values.some((value) => value && value.includes(number + 9));
  return (
    <div>
      <h1>{selectedDars.darsname}</h1>
      {darsData.map((v, i) => (
        <div key={i}>
          <h1>{v.name}</h1>
          {Array.from({ length: 9 }, (_, index) =>
            containsNumber1to9(
              [
                v.stage1,
                v.stage2,
                v.stage3,
                v.groupstage,
                v.offstage1,
                v.offstage2,
                v.offstage3,
                v.groupoffstage,
              ],
              "0" + (index + 1)
            )
              ? " 0" + (index + 1) + "y"
              : "x"
          )}
          {Array.from({ length: 31 }, (_,index) =>
            containsNumber(
              [
                v.stage1,
                v.stage2,
                v.stage3,
                v.groupstage,
                v.offstage1,
                v.offstage2,
                v.offstage3,
                v.groupoffstage,
              ],
              (index)+1
            )
              ? " " + (index + 10) + "y"
              : "x"
          )}
        </div>
      ))}
    </div>
  );
}

export default DarsDetails;
