import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { images } from "../assets/imges/Images";
import { IoChatbubbles } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="flex-1 min-w-[300px]">
            {/* Services Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Services</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Maid Service",
                  "Carpet Cleaning",
                  "Mattress Cleaning",
                  "Sofa Cleaning",
                  "Curtain Cleaning",
                  "Deep Cleaning",
                  "Move In & Out Cleaning Services",
                  "House Cleaning",
                  "Laundry & Dry Cleaning",
                  "AC Cleaning Service",
                  "Disinfection Service",
                  "Covid-19 PCR Test at Home",
                  "Women's Salon",
                  "Women's Spa",
                  "Furniture Cleaning",
                  "Men's Salon",
                  "Lab Tests at Home",
                  "Pest Control Service",
                  "Men's Spa",
                  "Men's Grooming",
                  "Hair Salon",
                  "Pet Grooming",
                  "IV Therapy",
                  "Babysitting At Home",
                  "Car Wash At Home",
                  "Plumber Services",
                  "Handyman Services",
                  "Electrician Services",
                  "Home Painting",
                  "Personal Trainer",
                  "Nail Couture",
                  "Packers and Movers",
                  "Physiotherapy at Home",
                  "Body Adjustment",
                  "Personal Nutritionist",
                  "Part Time Maid Services",
                  "Psychotherapy & Counselling",
                  "Nurse Care at Home",
                  "Mobile Ice Bath",
                  "Lashes and Brows at Home",
                  "Vaccines at Home",
                  "Spray Tanning",
                  "Commercial Cleaning",
                  "Office Cleaning",
                  "Villa Cleaning",
                  "Henna Service",
                  "Housekeeping Services",
                  "Floor Cleaning",
                  "Waxing Service",
                  "Doctor on Call",
                  "Facial Treatment Service",
                  "Eyebrow Threading",
                  "Flu Vaccine",
                  "Apartment Cleaning",
                  "Oxygen Therapy",
                  "Cat Grooming",
                ].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-gray-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Countries Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Countries</h2>
              <div className="flex flex-wrap gap-8">
                {[
                  {
                    country: "United Arab Emirates",
                    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
                  },
                  {
                    country: "Saudi Arabia",
                    cities: ["Jeddah", "Riyadh"],
                  },
                  {
                    country: "Qatar",
                    cities: ["Doha"],
                  },
                ].map((region, index) => (
                  <div key={index} className="flex-1">
                    <h3 className="font-medium">{region.country}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {region.cities.map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1 bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-gray-700"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 min-w-[300px] mt-8 lg:mt-0">
            {/* App Store and Social Links */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <div className="flex gap-4">
                <img
                  src={images.appStore}
                  alt="App Store"
                  className="h-8 cursor-pointer"
                />
                <img
                  src={images.playStore}
                  alt="Google Play"
                  className="h-8 cursor-pointer"
                />
              </div>
              <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-gray-400">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              {["F.A.Q", "Terms", "Privacy", "Sitemap", "Career"].map(
                (link) => (
                  <a key={link} href="#" className="hover:text-gray-400">
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Chat Icon */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <IoChatbubbles className="text-4xl text-sky-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
