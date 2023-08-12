import React, { useState, useEffect } from "react";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import DayTile from "./components/DayTile";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

function App() {
  const [data, setData] = useState(null)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  
  useEffect(() => {
    fetchData(months[currentMonthIndex]);
  }, [currentMonthIndex]);

  const fetchData = async (month) => {
    try {
      const response = await fetch(
        `https://v1.igpods.com/api/social_calendar/get/${month}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePreviousClick = () => {
    setCurrentMonthIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentMonthIndex((prevIndex) =>
      Math.min(prevIndex + 1, months.length - 1)
    );
  };

  return (
    <div className="App">
      <div className="header">
        {data && (
          <>
            <CalendarHeader
              month={data.calendar_banner_text}
              imageUrl={data.calendar_banner_url}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
            />
          </>
        )}
      </div>
      <div>
        {data && (
          <>
            <div className="day-tiles">
              {data.days.map((day) => (
                <DayTile key={day._id} dayData={day} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
