"use client";
import React, { useState } from "react";
import Data from "../data/FullData.json";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item
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

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-12 lg:p-20">
      <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
        Candidate Search
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
            className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start cursor-pointer"
            key={index}
            onClick={() => openPopup(item)}
          >
            <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
              {item.code}
            </h1>
            <p className="line-clamp-2 h-12">{item.name}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-xl flex flex-col items-center">
            <p className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
              {selectedItem.code}
            </p>
            <p className="h-12 font-bold text-xl text-primary">
              {selectedItem.name}
            </p>
            <p>Dars Name: {selectedItem.darsname}</p>
            <p>Category: {selectedItem.category}</p>
            <p className="bg-primary text-sm text-white px-2 py-1 mt-2 -mb-2 rounded-lg">
              offstage
            </p>

            <div className="border-2 border-dashed border-primary p-3 rounded-xl">
              <p> {selectedItem.offstage1}</p>
              <p>{selectedItem.offstage2}</p>
              <p>{selectedItem.offstage3}</p>
            </div>
            <p className="bg-primary text-sm text-white px-2 py-1 -mb-2 rounded-lg">
              stage
            </p>

            <div className="border-2 border-dashed border-primary p-3 rounded-xl">
              <p> {selectedItem.stage1}</p>
              <p>{selectedItem.stage2}</p>
              <p>{selectedItem.stage3}</p>
            </div>

            <p>Group Stage: {selectedItem.groupstage}</p>
            <p>Group Offstage: {selectedItem.groupoffstage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
