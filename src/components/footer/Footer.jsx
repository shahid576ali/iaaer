export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">
          Contact Us
        </h2>

        <div className="flex justify-between px-12 flex-col gap-10 md:flex-row">
          {/* President Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">President</h3>
            <p>Elizabeth A. Gordon</p>
            <p>Temple University</p>
            <p>Fox School of Business and Management</p>
            <p>339 Speakman Hall</p>
            <p>1810 N. 13th Street</p>
            <p>Philadelphia, PA 19122</p>
          </div>

          {/* Director of Research */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Director of Research and Educational Activities
            </h3>
            <p>Donna L. Street</p>
            <p>School of Business Administration</p>
            <p>300 College Park</p>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
            <p className="text-gray-400">admin@iaaer.org</p>
            <p>Phone: 215-204-6422</p>
            <p>Cell: 215-470-8915</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400">
          © {new Date().getFullYear()} IAAER. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
