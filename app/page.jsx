"use client";
import React, { useState } from "react";
import Data from "../data/FullData.json";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = Data.filter((item) => {
    const searchFields = [
      "code",
      "name",
      "darsname",
      "category",
      "offstage1",
      "offstage2",
      "offstage3",
      "stage1",
      "stage2",
      "stage3",
      "groupstage",
      "groupoffstage",
    ];
    return searchFields.some((field) => {
      const fieldValue = item[field] || ""; // Ensure a default value if the field is undefined
      return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-12 lg:p-20">
      <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
        Program Search
      </h1>
      <input
        type="text"
        placeholder="Search by CODE, Name, Dars Name, etc."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-xl border-2 border-dashed border-primary"
      />
      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {filteredData.map((item, index) => (
          <div
            className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start"
            key={index}
          >
            <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
              {item.code}
            </h1>
            <p className=" line-clamp-2 h-12">{item.name}</p>
            {/* Add addition  al fields here as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
