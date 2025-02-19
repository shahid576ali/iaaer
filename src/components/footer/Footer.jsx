export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">Contact Us</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* General Inquiries */}
            <div>
              <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
              <p className="text-gray-400">admin@iaaer.org</p>
            </div>
  
            {/* President Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">President</h3>
              <p>Elizabeth A. Gordon</p>
              <p>Temple University</p>
              <p>Fox School of Business and Management</p>
              <p>339 Speakman Hall</p>
              <p>1810 N. 13th Street</p>
              <p>Philadelphia, PA 19122</p>
              <p>Email: <a href="mailto:egordon@temple.edu" className="text-blue-400">egordon@temple.edu</a></p>
              <p>Phone: 215-204-6422</p>
              <p>Cell: 215-470-8915</p>
            </div>
  
            {/* Past President Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Past President</h3>
              <p>Keryn Chalmers</p>
              <p>Swinburne University</p>
              <p>The Swinburne School of Business</p>
              <p>PO Box 218</p>
              <p>Hawthorn, Victoria, 3122</p>
              <p>Australia</p>
              <p>Email: <a href="mailto:kchalmers@swin.edu.au" className="text-blue-400">kchalmers@swin.edu.au</a></p>
            </div>
  
            {/* Director of Research & Past President */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Director of Research and Educational Activities & Past President</h3>
              <p>Donna L. Street</p>
              <p>School of Business Administration</p>
              <p>300 College Park</p>
              <p>Dayton, OH 45469-2242</p>
              <p>Email: <a href="mailto:dstreet1@udayton.edu" className="text-blue-400">dstreet1@udayton.edu</a></p>
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
  