import React, { useState } from "react";

const Membership = () => {
  const [showStudent, setShowStudent] = useState(false);
  const [showIndividual, setShowIndividual] = useState(false);
  const [showUniversity, setShowUniversity] = useState(false);
  const [showInstitution, setShowInstitution] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Join IAAER</h1>

      <p className="mb-2">
        The following IAAER membership categories exist. Click on each category to view the eligibility, benefits, and membership fee.
      </p>
      <p className="mb-4">
        Please see our{" "}
        <a href="#" className="text-blue-500 underline">privacy policy</a> before registering for membership.
      </p>

      <div className="space-y-3">
        {/* Student */}
        <div>
          <button
            onClick={() => setShowStudent(!showStudent)}
            className="w-full p-3 border rounded-lg text-left text-blue-600 font-semibold bg-white hover:bg-gray-100"
          >
            Student
          </button>
          {showStudent && (
            <div className="p-4 mt-2 border rounded-lg bg-white shadow-inner space-y-3">
              <div className="flex justify-between font-semibold text-lg bg-gray-100 px-4 py-2 rounded">
                <span>Student membership</span>
                <span>$30.00 per annum</span>
              </div>
              <p>
                Membership active for one year while enrolled as a bachelor, masters, or PhD student in a business school program.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up!
              </button>
              <p className="text-sm">
                Once payment is submitted, membership is <strong>non-refundable</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Individual */}
        <div>
          <button
            onClick={() => setShowIndividual(!showIndividual)}
            className="w-full p-3 border rounded-lg text-left text-blue-600 font-semibold bg-white hover:bg-gray-100"
          >
            Individual
          </button>
          {showIndividual && (
            <div className="p-4 mt-2 border rounded-lg bg-white shadow-inner space-y-3">
              <div className="flex justify-between font-semibold text-lg bg-gray-100 px-4 py-2 rounded">
                <span>Individual Faculty membership</span>
                <span>$45.00 per annum</span>
              </div>
              <p>Membership active for one year.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up!
              </button>
              <p className="text-sm">
                Once payment is submitted, membership is <strong>non-refundable</strong>.
              </p>
            </div>
          )}
        </div>

        {/* University */}
        <div>
          <button
            onClick={() => setShowUniversity(!showUniversity)}
            className="w-full p-3 border rounded-lg text-left text-blue-600 font-semibold bg-white hover:bg-gray-100"
          >
            University
          </button>
          {showUniversity && (
            <div className="p-4 mt-2 border rounded-lg bg-white shadow-inner space-y-3">
              <p>
                University members include the accounting departments of universities worldwide with a commitment to accounting education and research.
              </p>
              <p>
                See the{" "}
                <a href="#" className="text-blue-600 underline">current university members</a>{" "}
                contributing to accounting education and research.
              </p>
              <div className="mt-3 border-t">
                <div className="grid grid-cols-2 font-bold bg-gray-100 py-2 px-4">
                  <span> </span>
                  <span>Annual</span>
                </div>
                {[
                  ["University membership, 10 faculty members", "$350.00"],
                  ["University membership, 20 faculty members", "$450.00"],
                  ["University membership, 30 faculty members", "$550.00"],
                  ["University membership, 40 faculty members", "$650.00"],
                  ["University membership, 50 faculty members", "$750.00"],
                ].map(([desc, price], idx) => (
                  <div key={idx} className="grid grid-cols-2 py-2 px-4 bg-white hover:bg-gray-50 border-b">
                    <span>{desc}</span>
                    <span>{price}</span>
                  </div>
                ))}
              </div>
              <p>Membership active for one year.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Link on IAAER to member website and search engine support through IFAC
                </li>
                <li>
                  Posting of conferences, events, and calls for research submission on IAAER website
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up!
              </button>
              <p className="text-sm">
                Once payment is submitted, membership is <strong>non-refundable</strong>.
              </p>
            </div>
          )}
        </div>
        {/* Institution */}
      <div>
        <button
    onClick={() => setShowInstitution(!showInstitution)}
    className="w-full p-3 border rounded-lg text-left text-blue-600 font-semibold bg-white hover:bg-gray-100"
  >
    Institution
  </button>
  {showInstitution && (
    <div className="p-4 mt-2 border rounded-lg bg-white shadow-inner space-y-4">
      <p>
        Institutional members include leading accounting professional bodies and academic associations worldwide that collaborate with IAAER for the promotion of accounting education and policy relevant research.
      </p>

      <div className="border-t">
        <div className="grid grid-cols-2 font-bold bg-gray-100 py-2 px-4">
          <span> </span>
          <span>Annual</span>
        </div>
        <div className="grid grid-cols-2 py-2 px-4 bg-white hover:bg-gray-50 border-b">
          <span>Academic Institution membership</span>
          <span>$350.00</span>
        </div>
        <div className="grid grid-cols-2 py-2 px-4 bg-white hover:bg-gray-50">
          <span>Professional Institution membership</span>
          <span>$500.00</span>
        </div>
      </div>

      <p>Membership active for one year.</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Display on IAAER website.</li>
        <li>Posting of conferences, events, and calls for research submission on IAAER website</li>
        <li>Opportunity to be considered for service on global-based committees</li>
        <li>Name recognition at IAAER events</li>
      </ul>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Sign Up!
      </button>
      <p className="text-sm">
        Once payment is submitted, membership is <strong>non-refundable</strong>.
      </p>
    </div>
  )}
    </div>

      </div>
    </div>
  );
};

export default Membership;
