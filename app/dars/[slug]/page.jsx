"use client";
import React from "react";
import { useParams } from "next/navigation";
import Data from "../../../data/FullData.json";

function DarsDetails() {
  const { slug } = useParams();

  // Find pe darsname corresponding to pe slug
  const selectedDars = Data.find((item) => item.slug === slug);
  const darsData = Data.filter((item) => item.slug === slug);

  if (!selectedDars) {
    return <div>No data found for pis slug.</div>;
  }

  const containsNumber1to9 = (values, number) =>
    values.some((value) => value && value.includes(number));
  const containsNumber = (values, number) =>
    values.some((value) => value && value.includes(number + 9));
  return (
    <div>
      <h1>{selectedDars.darsname}</h1>
      <div className="text-center text-xs">
        <div>
          <div className="flex h-60 items-end mb-8">
            <p className="w-[300px] text-left overflow-hidden whitespace-nowrap">name</p>
            <div className="w-[80vw] ">
              <div className="flex whitespace-nowrap font-semibold">
                <p className="w-6 -rotate-90">ഖിറാഅത്ത്</p>
                <p className="w-6 -rotate-90">ഹിഫ്ള്</p>
                <p className="w-6 -rotate-90">വാങ്ക്</p>
                <p className="w-6 -rotate-90">ക്ലാസ് അവതരണം </p>
                <p className="w-6 -rotate-90">വഅ്ള് </p>
                <p className="w-6 -rotate-90">പ്രസംഗം മലയാളം </p>
                <p className="w-6 -rotate-90">പ്രസംഗം അറബി </p>
                <p className="w-6 -rotate-90">പ്രസംഗം ഉറുദു </p>
                <p className="w-6 -rotate-90">പ്രസംഗം ഇംഗ്ലീഷ് </p>
                <p className="w-6 -rotate-90">ഖുഥ്ബ </p>
                <p className="w-6 -rotate-90">ഗ്രന്ഥ വായന </p>
                <p className="w-6 -rotate-90">കവിതാലാപനം മലയാളം </p>
                <p className="w-6 -rotate-90">മുശാഅറ </p>
                <p className="w-6 -rotate-90">അനൗണ്‍സ്മെന്‍റ് </p>
                <p className="w-6 -rotate-90">പ്രബന്ധാവതരണം </p>
                <p className="w-6 -rotate-90">നിമിഷപ്രസംഗം </p>
                <p className="w-6 -rotate-90">പാടിപ്പറയല്‍ </p>
                <p className="w-6 -rotate-90">മാഷപ്പ് മാപ്പിളപ്പാട്ട് </p>
                <p className="w-6 -rotate-90">ഖസ്വീദ പാരായണം </p>
                <p className="w-6 -rotate-90">പ്രോഗ്രാം സെറ്റിംഗ് </p>
                <p className="w-6 -rotate-90">അറബിക് കാലിഗ്രഫി </p>
                <p className="w-6 -rotate-90">പോസ്റ്റര്‍ ഡിസൈനിംഗ് </p>
                <p className="w-6 -rotate-90">ഖത്തുന്നസ്ഖ് </p>
                <p className="w-6 -rotate-90">ഖത്തുറുഖഈ </p>
                <p className="w-6 -rotate-90">വിവര്‍ത്തനം </p>
                <p className="w-6 -rotate-90">വിവര്‍ത്തനം </p>
                <p className="w-6 -rotate-90">വിവര്‍ത്തനം </p>
                <p className="w-6 -rotate-90">പ്രബന്ധം അറബി </p>
                <p className="w-6 -rotate-90">പ്രബന്ധം ഇംഗ്ലീഷ് </p>
                <p className="w-6 -rotate-90">പ്രബന്ധം മലയാളം </p>
                <p className="w-6 -rotate-90">റിപ്പോര്‍ട്ടിംഗ് </p>
                <p className="w-6 -rotate-90">തലവാചക നിര്‍മ്മാണം </p>
                <p className="w-6 -rotate-90">മുദ്രവാക്യ രചന </p>
                <p className="w-6 -rotate-90">കവിതാ രചന </p>
                <p className="w-6 -rotate-90">നിഘണ്ടു നിര്‍മ്മാണം </p>
                <p className="w-6 -rotate-90">അടിക്കുറിപ്പ് </p>
                <p className="w-6 -rotate-90">പദ സമ്പാദനം </p>
                <p className="w-6 -rotate-90">തശ്കീല്‍ </p>
                <p className="w-6 -rotate-90">പ്രശ്നോത്തരി </p>
                <p className="w-6 -rotate-90">പത്രനിര്‍മാണം</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {darsData.map((v, i) => (
            <div key={i} className="flex">
              <p className="w-[300px] text-left line-clamp-1 font-semibold">{v.name}</p>
              <div className="flex w-[80vw] border-b border-slate-800">
                {Array.from({ length: 9 }, (_, index) => (
                  <p key={index} className="w-6 even:bg-gray-200 font-bold">
                    {containsNumber1to9(
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
                      ? "✓"
                      : ""}
                  </p>
                ))}
                {Array.from({ length: 31 }, (_, index) => (
                  <p key={index} className="w-6 even:bg-gray-200 font-bold">
                    {containsNumber(
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
                      index + 1
                    )
                      ? "✓"
                      : ""}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DarsDetails;
