import React, { useEffect, useState } from "react";
import "./NavTime.css";
import moment from "moment";
import { FaRegCalendarAlt } from "react-icons/fa";

const NavTime = () => {
  const currentDate = moment();
  const formattedDate = currentDate.format("dddd: MMMM DD, YYYY");

  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const newCurrentTime = moment();
      // Update the currentTime state variable with the new time
      setCurrentTime(newCurrentTime);
    };

    setInterval(updateTime, 1000); // Update every second
  }, []);

  // Check if currentTime is null before calling format()
  if (!currentTime) return null;

  const formattedTime = currentTime.format("h : mm : ss A");

  return (
    <div className="NavTime_main_outer">
      <div className="NavTime_main">
        <div className="NavTime_date">
          <p>
            <FaRegCalendarAlt />
            &nbsp; &nbsp;
            {formattedDate}
          </p>
        </div>
        <div className="NavTime_time">
          <p>
            &nbsp; &nbsp;
            {formattedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavTime;
