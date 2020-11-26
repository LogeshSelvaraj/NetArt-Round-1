import React from "react";
import ParaItem from "./InstalltionSecondPara";

function Installations() {
  const str = `CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL`;

  const strArray = str.split("&");

  console.log(strArray);

  return (
    <>
      <div className="installation-first-section ">
        <h4 className="text-center">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h4>
        <div className="inst-image">
          <img src="/images/3.png" alt="instruments" width="100%" />
        </div>
        <p className="text-center">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr className="section-divider" />
      <div className="installation-second-section">
        <h4 className="text-center">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h4>
        <p className="text-center">
          {strArray.map((str, index) => {
            let lineParams = false;
            if (index === strArray.length - 1) lineParams = true;
            return (
              <ParaItem key={index} lineParams={lineParams} content={str} />
            );
          })}
        </p>
      </div>
    </>
  );
}

export default Installations;
