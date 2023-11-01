"use client";
import React from "react";
import { useParams } from "next/navigation";
import Data from "../../../data/FullData.json";

function ProgramDetail() {
  const { slug } = useParams();
  console.log(slug);
  const programFields = [
    "offstage1",
    "offstage2",
    "offstage3",
    "stage1",
    "stage2",
    "stage3",
    "groupstage1",
    "groupstage2",
    "groupstage3",
    "groupoffstage",
  ];

  const allValues = Data.reduce((result, item) => {
    programFields.forEach((field) => {
      if (item[field]) {
        const programValue = item[field];
        const candidates = Data.filter((candidate) => {
          return programFields.some((fieldToCheck) => {
            return (
              candidate[fieldToCheck] === programValue && candidate.category === item.category
            );
          });
        }).map((candidate) => ({
          code: candidate.code,
          name: candidate.name,
          darsplace: candidate.darsplace,
        }));
        result.push({
          program: programValue,
          category: item.category,
          candidates,
        });
      }
    });
  
    return result;
  }, []);

  const uniqueValues = allValues.reduce((unique, current) => {
    const isDuplicate = unique.some(
      (item) =>
        item.program === current.program && item.category === current.category
    );
    if (!isDuplicate) {
      // Generate a slug based on the first letter of the category and the first two letters of program
      const slug = generateSlug(current.category, current.program);
      unique.push({
        program: current.program,
        category: current.category,
        candidates: current.candidates,
        slug,
      });
    }
    return unique;
  }, []);

  // Define a function to generate a slug based on category and program
  function generateSlug(category, program) {
    const categorySlug = category.charAt(0);
    const programSlug = program.slice(0, 2);
    return categorySlug + programSlug;
  }

  console.log(uniqueValues); // This will now include the "slug" field for each program

  const programData = uniqueValues.find((item) => item.slug === slug);

  if (programData) {
    programData.candidates.sort((a, b) => {
      // Assuming that 'darsplace' is a string property, you can use localeCompare for string comparison.
      return a.darsplace.localeCompare(b.darsplace);
    });
  }
  
  if (!programData) {
    // Handle the case where the program is not found
    return <div>Program not found</div>;
  }

  return (
    <div className="p-20 print:p-2 lg:flex lg:flex-col lg:items-center">
      <div className="text-center">
        <p className="text-3xl font-bold ">Jamia Dars Fest 2023-&apos;24</p>
        <p className="text-2xl font-bold my-2">Kondotty Zone</p>
        <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
          {programData.program} ({programData.category})
        </h1>
      </div>

      <table className="m-3">
        <thead>
          <tr className="print:bg-black print:text-white bg-black text-white">
            <th className="p-1">Sl No</th>
            <th className="p-1">Code</th>
            <th className="p-1">Name </th>
            <th className="p-1">Dars Place</th>
            <th className="p-1">Mark</th>
            <th className="p-1">Grade</th>
            <th className="p-1">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {programData.candidates.map((v, i) => (
            <tr key={i} className="">
              <td className="px-1 text-center w-8">{i + 1}</td>
              <td className="px-1 text-center w-10">{v.code}</td>
              <td className="px-1 w-64 line-clamp-1">{v.name}</td>
              <td className="px-1 w-40">{v.darsplace}</td>
              <td className="px-1 w-10"></td>
              <td className="px-1 w-8"></td>
              <td className="px-1 w-40"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramDetail;
