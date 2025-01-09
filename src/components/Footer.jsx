import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { images } from "../assets/imges/Images";
import { IoChatbubbles } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="mr-32 ml-32 flex ">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* Services Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Services</h2>
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
          <div className="mb-4 flex items-center   mr-96">
            <div className="mr-10">
              <h2 className="text-lg font-semibold">United Arab Emirates</h2>
              <div className="flex gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman"].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-gray-700"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="mr-10">
              <h2 className="text-lg font-semibold">Saudi Arabia</h2>
              <div className="flex gap-2">
                {["Jeddah", "Riyadh"].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-gray-700"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Qatar</h2>
              <div className="flex gap-2">
                {["Doha"].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-gray-700"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* App Store and Social Links */}
          <div className="flex mt-16 flex-wrap items-center justify-between gap-4">
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
                <FaFacebook className="text-white" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram className="text-white" />
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex justify-center mt-4 space-x-6 text-xs">
              {["F.A.Q", "Terms", "Privacy", "Sitemap", "Career"].map(
                (link) => (
                  <a key={link} href="#" className="hover:text-gray-400">
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className=" place-content-end pl-9">
          <IoChatbubbles className="text-4xl text-sky-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
