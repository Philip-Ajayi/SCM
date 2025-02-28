import React from "react";

const faqData = [
  {
    question: "How do I book a room?",
    answer:
      "You can book your stay directly through the hotel's website or contact them by phone. Links to each hotel's booking page can be found on their respective websites.",
  },
  {
    question: "Are there any group discounts available?",
    answer:
      "Please contact the hotels directly to inquire about group rates or discounts for attendees of the camp meeting.",
  },
  {
    question: "Is transportation provided between the hotels and the camp meeting venue?",
    answer:
      "We recommend arranging your own transportation. However, some hotels may offer shuttle services. Please check with the individual hotel for details.",
  },
  {
    question: "What amenities are included with the stay?",
    answer: "Amenities vary by hotel. Common offerings include Wi-Fi, complimentary breakfast, and parking. Please review each hotel’s amenities on their website for more information.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation policies differ by hotel. We recommend reviewing the specific policy during booking or contacting the hotel directly for details.",
  },
];
const FAQ = () => {
  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 mb-28 px-8"> {/* Reduced mt-20 to mt-10 */}
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>
  
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
  
          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );  
};

export default FAQ;