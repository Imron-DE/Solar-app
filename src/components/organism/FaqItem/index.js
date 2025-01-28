import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-2">
      <button className="w-full text-left font-semibold text-lg p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <p className="p-2 bg-white text-gray-700 border-l-4 border-blue-500 rounded-lg mt-1">{answer}</p>}
    </div>
  );
};

export default FAQItem;
