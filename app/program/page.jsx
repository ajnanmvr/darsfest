"use client";
import React, { useState } from "react";
import Data from "../../data/FullData.json";
import Link from "next/link";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
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
        slug, // Add the slug here
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

  const filteredData = uniqueValues.filter((item) => {
    return programFields.some((field) => {
      const fieldValue = item[field] || ""; // Ensure a default value if the field is undefined
      return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (<>
    <div className="lg:fixed lg:right-20 lg:top-5 bg-white w-full lg:w-fit text-center rounded-full lg:p-4 px-4 p-10">
    <Link className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1" href="/">Candidates
    </Link>
    <Link className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1" href="/program">Programs
    </Link>
    <Link className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1" href="/dars/">Dars List
    </Link>
  </div>
    <div className="p-12 pt-0 lg:p-20">

      <div className="flex flex-col items-center gap-4">

        <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
          Program Search
        </h1>
        <input
          type="text"
          placeholder="Search by CODE, Name, Dars Name, etc."
          value={searchTerm}
          onChange={handleSearch}
          className="w-2/3 px-4 py-2 rounded-xl border-2 border-dashed border-primary"
        />
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {filteredData.map((item, index) => (
            <Link key={index} href={`/program/${item.slug}`}>
              <div
                className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start cursor-pointer"
              >
                <div className="flex justify-between items-center w-full">
                  {" "}
                  <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                    {item.category}
                  </h1>
                  <h1 className="text-primary font-semibold">
                    {item.candidates.length} Candidates
                  </h1>
                </div>
                <div className="line-clamp-2 border-2 h-16 p-3 my-2 border-primary flex items-center justify-center rounded-xl border-dashed w-full">
                  <p className="line-clamp-2 text-center">{item.program}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div></>
  );
}

export default Search;
