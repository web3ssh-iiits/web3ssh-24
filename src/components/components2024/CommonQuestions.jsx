'use client';

import { useState } from 'react';
import faqData from '@data/faq.json';

const CommonQuestions = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div id="faq" className="font-inter antialiased text-white">
      <main className="min-h-screen flex flex-col justify-center  overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-5xl py-2 font-sans font-semibold text-white mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-xl"
              >
                <h2>
                  <button
                    id={`faqs-title-0${index + 1}`}
                    type="button"
                    className="flex items-center justify-between w-full text-left font-sans font-medium py-2 text-white"
                    onClick={() => toggleExpand(index + 1)}
                    aria-expanded={expandedItem === index + 1}
                    aria-controls={`faqs-text-0${index + 1}`}
                  >
                    <span className="flex-1 lg:text-2xl text-2xl">
                      {item.question}
                    </span>
                    <svg
                      className={`fill-current h-6 w-6 transition-transform duration-200 ease-out ${
                        expandedItem === index + 1 ? '' : 'rotate-180'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414l-5.5-5.5a1 1 0 00-1.414 0l-5.5 5.5a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`faqs-text-0${index + 1}`}
                  role="region"
                  aria-labelledby={`faqs-title-0${index + 1}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedItem === index + 1
                      ? 'max-h-screen opacity-100 mt-2'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-3 text-xl text-gray-300 font-sans">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommonQuestions;
