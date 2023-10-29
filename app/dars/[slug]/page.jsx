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
      <table className="text-sm">
        <tr>
          <th className="">name</th>
          <th className="-rotate-90">1. ഖിറാഅത്ത് </th>
          <th className="-rotate-90">2. ഹിഫ്ള് </th>
          <th className="-rotate-90">3. വാങ്ക് </th>
          <th className="-rotate-90">4. ക്ലാസ് അവതരണം </th>
          <th className="-rotate-90">5. വഅ്ള് </th>
          <th className="-rotate-90">6. പ്രസംഗം മലയാളം </th>
          <th className="-rotate-90">7. പ്രസംഗം അറബി </th>
          <th className="-rotate-90">8. പ്രസംഗം ഉറുദു </th>
          <th className="-rotate-90">9. പ്രസംഗം ഇംഗ്ലീഷ് </th>
          <th className="-rotate-90">10. ഖുഥ്ബ </th>
          <th className="-rotate-90">11. ഗ്രന്ഥ വായന </th>
          <th className="-rotate-90">12. കവിതാലാപനം മലയാളം </th>
          <th className="-rotate-90">13. മുശാഅറ </th>
          <th className="-rotate-90">14. അനൗണ്‍സ്മെന്‍റ് </th>
          <th className="-rotate-90">15. പ്രബന്ധാവതരണം </th>
          <th className="-rotate-90">16. നിമിഷപ്രസംഗം </th>
          <th className="-rotate-90">17. പാടിപ്പറയല്‍ </th>
          <th className="-rotate-90">18. മാഷപ്പ് മാപ്പിളപ്പാട്ട് </th>
          <th className="-rotate-90">19. ഖസ്വീദ പാരായണം </th>
          <th className="-rotate-90">20. പ്രോഗ്രാം സെറ്റിംഗ് </th>
          <th className="-rotate-90">21. അറബിക് കാലിഗ്രഫി </th>
          <th className="-rotate-90">22. പോസ്റ്റര്‍ ഡിസൈനിംഗ് </th>
          <th className="-rotate-90">23. ഖത്തുന്നസ്ഖ് </th>
          <th className="-rotate-90">24. ഖത്തുറുഖഈ </th>
          <th className="-rotate-90">25. വിവര്‍ത്തനം </th>
          <th className="-rotate-90">26. വിവര്‍ത്തനം </th>
          <th className="-rotate-90">27. വിവര്‍ത്തനം </th>
          <th className="-rotate-90">28. പ്രബന്ധം അറബി </th>
          <th className="-rotate-90">29. പ്രബന്ധം ഇംഗ്ലീഷ് </th>
          <th className="-rotate-90">30. പ്രബന്ധം മലയാളം </th>
          <th className="-rotate-90">31. റിപ്പോര്‍ട്ടിംഗ് </th>
          <th className="-rotate-90">32. തലവാചക നിര്‍മ്മാണം </th>
          <th className="-rotate-90">33. മുദ്രവാക്യ രചന </th>
          <th className="-rotate-90">34. കവിതാ രചന </th>
          <th className="-rotate-90">35. നിഘണ്ടു നിര്‍മ്മാണം </th>
          <th className="-rotate-90">36. അടിക്കുറിപ്പ് </th>
          <th className="-rotate-90">37. പദ സമ്പാദനം </th>
          <th className="-rotate-90">38. തശ്കീല്‍ </th>
          <th className="-rotate-90">39. പ്രശ്നോത്തരി </th>
          <th className="-rotate-90">40. പത്രനിര്‍മാണം</th>
        </tr>
        {darsData.map((v, i) => (
          <tr key={i}>
            <th>{v.name}</th>
            {Array.from({ length: 9 }, (_, index) => (
              <td key={index}>
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
                  ? "y"
                  : "x"}
              </td>
            ))}
            {Array.from({ length: 31 }, (_, index) => (
              <td key={index}>
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
                  ? "y"
                  : "x"}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DarsDetails;
