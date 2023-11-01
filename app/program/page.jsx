"use client";
import React, { useState } from "react";
import Data from "../../data/FullData.json";
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
        result.push({
          program: programValue,
          category: item.category,
          candidates: Data.filter((candidate) =>
            programFields.some(
              (fieldToCheck) => candidate[fieldToCheck] === programValue
            )
          ).map((candidate) => candidate.name),
        });
      }
    });

    return result;
  }, []);

  // Remove duplicates based on both "program" and "category"
  const uniqueValues = allValues.reduce((unique, current) => {
    const isDuplicate = unique.some(
      (item) =>
        item.program === current.program && item.category === current.category
    );
    if (!isDuplicate) {
      unique.push(current);
    }
    return unique;
  }, []);

  console.log(uniqueValues);

  const filteredData = uniqueValues.filter((item) => {
    return programFields.some((field) => {
      const fieldValue = item[field] || ""; // Ensure a default value if the field is undefined
      return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-12 lg:p-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
          Candidate Search
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
            <div
              className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start cursor-pointer"
              key={index}
              onClick={() => openPopup(item)}
            >
              <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                {item.category}
              </h1>
              <p className="line-clamp-2 h-12">{item.program}</p>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center">
            <div className="bg-white p-10 rounded-xl flex flex-col items-center max-w-[400px] text-center">
              <p className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                {selectedItem.category}
              </p>
              <p className="font-bold text-xl text-primary">
                {selectedItem.program}
              </p>
              <p className="font-bold -mt-1 text-sm ">
                {selectedItem.category} Category
              </p>

              <p className="bg-primary text-sm text-white px-2 py-1 -mb-2 rounded-lg">
                Candidtes
              </p>
              <div className="border-2 border-dashed border-primary p-3 mb-2 rounded-xl text-center">
                {selectedItem.candidates.map((v, i) => (
                  <p key={i}>{v}</p>
                ))}
              </div>

              <p className="my-3 text-sm">for enquries contact admin</p>
              <button
                className="bg-red-700 text-white font-bold px-3 py-2 rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
