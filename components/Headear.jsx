"use client"
import Link from "next/link";
import Data from "../data/FullData.json";
import React, { useEffect, useState } from 'react'

const Headear = ({
    selectedZone , setSelectedZone
}) => {
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
        "groupstage1",
        "groupstage2",
        "groupstage3",
        "groupoffstage",
      ];
    
      // Check if the selectedZone is not empty, and filter by zone if applicable
      if (selectedZone) {
        return (
          item.zone.toLowerCase() === selectedZone.toLowerCase() &&
          searchFields.some((field) => {
            const fieldValue = item[field] || "";
            return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
          })
        );
      } else {
        return searchFields.some((field) => {
          const fieldValue = item[field] || "";
          return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
    });
  return (
    <div className="lg:fixed lg:right-20 lg:top-5 bg-white w-full lg:w-fit text-center rounded-full lg:p-4 px-4 p-10">
   

      
    <select
  value={selectedZone}
  onChange={(e) => {
    localStorage.setItem("zone" ,e.target.value )
    setSelectedZone(e.target.value)
  }}
  className="w-2/3 px-4 py-2 rounded-xl border-2 border-dashed border-primary mt-3"
>
  <option value="">All Zones</option>
  {/* Assuming the zones are available in your data */}
  {Array.from(new Set(Data.map((item) => item.zone))).map((zone, index) => (
    <option key={index} value={zone}>
      {zone}
    </option>
  ))}
</select>

          
          <Link
            className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="/"
          >
            Candidates
          </Link>

          <Link
            className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="/program"
          >
            Programs
          </Link>
          <Link
            className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="/dars/"
          >
            Dars List
          </Link>
        </div>
  )
}

export default Headear