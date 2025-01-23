import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-100">
        <div class="container mx-auto px-4 py-8">
          <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">Jakarta</h3>
              <p>Jl. Scientia Boulevard Barat Blok B no 7 Ruko Faraday, Gading Serpong, Tangerang (Jabodetabek), Banten 15334, Indonesia</p>
              <p>
                <a href="tel:+6281393822822" class="text-blue-500 hover:underline">
                  081 393 822 822
                </a>
              </p>
              <p>
                <a href="mailto:sales@shams.id" class="text-blue-500 hover:underline">
                  sales@shams.id
                </a>
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-4">Semarang</h3>
              <p>Jl. Sedane No.12, Bugangan, Kec. Semarang Timur, Kota Semarang, Jawa Tengah 50126, Indonesia</p>
              <p>
                <a href="tel:+622486042096" class="text-blue-500 hover:underline">
                  (024) 86042096
                </a>
              </p>
              <p>
                <a href="tel:+6281393822822" class="text-blue-500 hover:underline">
                  081 393 822 822 WA
                </a>
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-4">Surabaya</h3>
              <p>Coming Soon!</p>
            </div>
          </div>

          <div class="flex justify-center mt-8 space-x-4">
            <a href="#" class="text-blue-500 hover:underline">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>

          <div class="mt-8 text-center">
            <p class="text-lg font-bold mb-4">Follow us</p>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-blue-500 hover:underline">
                <i class="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" class="text-blue-500 hover:underline">
                <i class="fab fa-youtube"></i> Youtube
              </a>
              <a href="#" class="text-blue-500 hover:underline">
                <i class="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" class="text-blue-500 hover:underline">
                <i class="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" class="text-blue-500 hover:underline">
                <i class="fab fa-tiktok"></i> Tiktok
              </a>
              <a href="#" class="text-blue-500 hover:underline">
                <i class="fab fa-linkedin"></i> Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
