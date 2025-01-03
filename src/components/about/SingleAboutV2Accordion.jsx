'use client';
import React from "react";

const SingleAboutV2Accordion = ({ accordion, isOpen, onToggle }) => {
  const { id, title, text } = accordion;

  return (
    <div className="border border-gray-300 rounded-md">
      <h2>
        <button
          className="w-full text-left p-4 font-medium focus:outline-none"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`accordion-content-${id}`}
        className={`overflow-hidden transition-[max-height] linear duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 border-t border-gray-300">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleAboutV2Accordion;
