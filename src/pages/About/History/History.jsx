import { div } from 'framer-motion/client'
import React, { useState } from 'react'

const History = () => {
  const [activeTab, setActiveTab] = useState("History")

  return (
    <div >
      <h2 className='text-xl font-bold mb-2'>History of the IAAER</h2>
      <div className="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-6">
          {["History", "Congresses", "Timeline","Former Officers"].map((tab) => (
            <button
              key={tab}
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 
                ${activeTab === tab ? "bg-white text-gray-900 shadow" : "text-gray-700 hover:text-gray-900"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {activeTab === "History" && (
          <div className='w-[55%] mb-14'>
            <p>A history of the International Association for Accounting Education and Research (IAAER): 1984-2004, By Belverd E. Needles, Jr. A paper presented to The Academy of Accounting Historians.</p>
            <p>Read it <a className='text-blue-400' href="#">here</a></p>
          </div>
        )}
    </div>
  )
}

export default History