import React from "react";

const PIMR = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="flex w-full max-w-7xl gap-6">
        {/* Main content */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-center">
            Links to Resources Available from IAAER Professional Institutional Members
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Here are links to professional institutional members and resources available from them
            relevant to our research and teaching endeavors.
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            <img src="/path/to/acca.png" alt="ACCA" className="w-28 h-28 object-contain" />
            <img src="/path/to/cafr.png" alt="CAFR Romania" className="w-28 h-28 object-contain" />
            <img src="/path/to/ceccar.png" alt="CECCAR" className="w-28 h-28 object-contain" />
            <img src="/path/to/pibr.png" alt="PIBR" className="w-28 h-28 object-contain" />
            <img src="/path/to/aicpa.png" alt="AICPA & CIMA" className="w-40 h-28 object-contain" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64 space-y-4">
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="font-semibold text-center mb-2">Gold Sponsors</h2>
            <img src="/path/to/kpmg.png" alt="KPMG" className="w-full h-16 object-contain" />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="font-semibold text-center mb-2">Silver Sponsors</h2>
            <img src="/path/to/acca.png" alt="ACCA" className="w-full h-16 object-contain" />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="font-semibold text-center mb-2">IAAER LinkedIn</h2>
            <img src="/path/to/linkedin.png" alt="LinkedIn" className="w-full h-16 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PIMR;
