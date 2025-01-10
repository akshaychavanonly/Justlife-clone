import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

function Service() {
  const [hours, setHours] = useState(2);
  const [professionals, setProfessionals] = useState(1);
  const [materials, setMaterials] = useState(false);
  const [instructions, setInstructions] = useState("");

  const calculateTotal = () => {
    const basePrice = 78;
    return (
      basePrice +
      (hours - 1) * 10 +
      (professionals - 1) * 20 +
      (materials ? 15 : 0)
    );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Panel */}
      <div className="flex-1 bg-white shadow-lg p-6 rounded-lg">
        <div>
          <h4 className="text-lg font-semibold mb-2">
            How many hours do you need your professional to stay?
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((hour) => (
              <button
                key={hour}
                className={`px-4 py-2 rounded-full border ${
                  hours === hour ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setHours(hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">
            How many professionals do you need?
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4].map((pro) => (
              <button
                key={pro}
                className={`px-4 py-2 rounded-full border ${
                  professionals === pro
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setProfessionals(pro)}
              >
                {pro}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            Need cleaning materials?{" "}
            <FaInfoCircle className="ml-2 text-gray-500" />
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              className={`px-4 py-2 rounded-full border ${
                !materials ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setMaterials(false)}
            >
              No, I have them
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${
                materials ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setMaterials(true)}
            >
              Yes, please
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">
            Any instructions or special requirements?
          </h4>
          <textarea
            className="w-full border rounded-lg p-3 mb-2"
            rows="3"
            placeholder="Example: Key under the mat, ironing, window cleaning, etc."
            maxLength="150"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <p className="text-right text-gray-500">{instructions.length}/150</p>
        </div>

        <button className="w-full bg-yellow-400 text-white py-3 rounded-lg mt-4 text-lg font-semibold">
          Next
        </button>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-gray-50 shadow-lg p-6 rounded-lg">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Booking Details</h4>
          <p className="text-gray-700">
            <strong>Address:</strong> 673C+W8V - Dubai - United Arab Emirates
          </p>
          <p className="text-gray-700">
            <strong>Service:</strong> Home Cleaning
          </p>
          <p className="text-gray-700">
            <strong>Duration:</strong> {hours} hours
          </p>
          <p className="text-gray-700">
            <strong>Number of Professionals:</strong> {professionals}
          </p>
          <p className="text-gray-700">
            <strong>Material:</strong> {materials ? "Yes" : "No"}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Payment Summary</h4>
          <p className="text-gray-700 text-xl">
            <strong>Total:</strong> AED {calculateTotal().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
