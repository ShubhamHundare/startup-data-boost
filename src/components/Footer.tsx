import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-azure-blue">Datavolx</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses with end-to-end Azure data engineering solutions. 
              Cloud migration, data pipelines, and business intelligence for all sizes.
            </p>
            <p className="text-gray-400">
              <a href="mailto:info@datavolx.com" className="hover:text-azure-blue transition-colors">
                info@datavolx.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-azure-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-azure-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-azure-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Azure Data Lake Setup</li>
              <li className="text-gray-300">PySpark Automation</li>
              <li className="text-gray-300">Power BI Dashboards</li>
              <li className="text-gray-300">Ongoing DataOps</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Datavolx. All rights reserved. Built by Azure-certified data engineers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;