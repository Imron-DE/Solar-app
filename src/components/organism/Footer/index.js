import React from "react";

// Pastikan Anda sudah mengimpor Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[url('https://shams.id/wp-content/uploads/2022/02/Background-ttg-1-edit.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-opacity-50">
        <div className="container mx-auto px-4 py-16 text-white">
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-orange-500 text-start mb-8">Contact Us</h2>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Jakarta */}
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">Jakarta</h3>
              <p>Jl. Scientia Boulevard Barat Blok B no 7 Ruko Faraday, Gading Serpong, Tangerang (Jabodetabek), Banten 15334, Indonesia</p>
              <p>
                <a href="tel:+6281393822822" className="text-orange-500 hover:underline">
                  081 393 822 822
                </a>
              </p>
              <p>
                <a href="mailto:sales@shams.id" className="text-orange-500 hover:underline">
                  sales@shams.id
                </a>
              </p>
            </div>

            {/* Semarang */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Semarang</h3>
              <p>Jl. Sedane No.12, Bugangan, Kec. Semarang Timur, Kota Semarang, Jawa Tengah 50126, Indonesia</p>
              <p>
                <a href="tel:+622486042096" className="text-orange-500 hover:underline">
                  (024) 86042096
                </a>
              </p>
              <p>
                <a href="tel:+6281393822822" className="text-orange-500 hover:underline">
                  081 393 822 822 WA
                </a>
              </p>
            </div>

            {/* Surabaya */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Surabaya</h3>
              <p>Coming Soon!</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-items-start space-x-4">
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <i className="fab fa-instagram text-4xl"></i>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <i className="fab fa-youtube text-4xl"></i>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <i className="fab fa-facebook text-4xl"></i>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <i className="fab fa-twitter text-4xl"></i>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <i className="fab fa-tiktok text-4xl"></i>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <i className="fab fa-linkedin text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
