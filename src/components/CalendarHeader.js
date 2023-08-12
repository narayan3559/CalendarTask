import React from "react";

const CalendarHeader = ({ month, imageUrl, onPreviousClick, onNextClick }) => {
  return (
    <div className="calendar-header">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="header-content">
          <button onClick={onPreviousClick}>
            <svg
              className="header-svg"
              class="w-[10px] h-[10px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
              style={{ height: "15px", width: "15px" }}
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
          <div className="month-year">{month}</div>
          <button onClick={onNextClick}>
            <svg
              className="header-svg"
              class="w-[10px] h-[10px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
              style={{ height: "15px", width: "15px" }}
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;

