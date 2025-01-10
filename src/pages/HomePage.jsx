import { images } from "../assets/imges/Images";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const services = [
    {
      category: "General Cleaning",
      items: [
        {
          name: "Home Cleaning",
          img: images.homeClean,
          route: "/service",
        },
        { name: "Furniture Cleaning", img: images.fortune, route: "/service" },
        { name: "Deep Clean", img: images.deepClean, route: "/service" },
        {
          name: "AC Cleaning at Home",
          img: images.homeClean,
          route: "/service",
        },
        {
          name: "Laundry and Dry Cleaning",
          img: images.homeClean,
        },
      ],
    },
    {
      category: "Salon & Spa at Home",
      items: [
        { name: "Women's Salon", img: images.homeClean },
        { name: "Women's Spa", img: images.homeClean },
        { name: "Premium Men's Salon", img: images.homeClean },
        { name: "Men's Spa", img: images.homeClean },
        { name: "Hair Care", img: images.homeClean },
      ],
    },
    {
      category: "Handyman & Maintenance",
      items: [
        {
          name: "Handyman & Maintenance",
          img: images.fortune,
        },
        { name: "Home Painting", img: images.fortune },
        { name: "Water Tank Cleaning", img: images.fortune },
      ],
    },
    {
      category: "Healthcare at Home",
      items: [
        { name: "Lab Tests at Home", img: "https://via.placeholder.com/150" },
        { name: "IV Therapy at Home", img: "https://via.placeholder.com/150" },
        {
          name: "Doctor Consultations",
          img: "https://via.placeholder.com/150",
        },
        { name: "Flu Vaccine at Home", img: "https://via.placeholder.com/150" },
        { name: "Nurse Care at Home", img: "https://via.placeholder.com/150" },
      ],
    },
  ];

  const scrollRef = useRef({}); // Refs to track scroll containers

  return (
    <div className="px-4 sm:px-8 lg:px-28 min-h-screen p-6">
      {services.map((section, index) => (
        <div key={index} className="mb-8">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{section.category}</h2>
            <a href="/" className="text-blue-500 hover:underline">
              See all
            </a>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div
              ref={(el) => (scrollRef.current[section.category] = el)}
              className="flex space-x-4 overflow-x-scroll scrollbar-hide"
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[140px] sm:w-[150px] md:w-[180px] overflow-hidden"
                  onClick={() => navigate(item.route)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-36 object-cover"
                  />
                  <div className="pt-2">
                    <h3 className="text-sm md:text-base font-medium text-center">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600">
          Show More
        </button>
      </div>
    </div>
  );
}

export default HomePage;
