import { useState, useEffect } from "react";
import moment from "moment";
import "./style.scss";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const Home = () => {
  const [currentMonthYear, setCurrentMonthYear] = useState({
    month: moment().get("month"),
    year: moment().get("year"),
  });
  const [monthCalendar, setMonthCalendar] = useState([]);

  useEffect(() => {
    const startWeekDay = moment()
      .set(currentMonthYear)
      .startOf("month")
      .get("day");
    const lastMonthDay = moment().set(currentMonthYear).endOf("month").get("D");
    const arr = [];

    // loop for the weeks
    let currentDay = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      // loop for the days
      for (let n = 0; n < 7; n++) {
        let day = currentDay;
        if (day <= lastMonthDay) {
          if (i === 0) {
            if (n < startWeekDay) {
              day = "";
            } else {
              currentDay++;
            }
          } else {
            currentDay++;
          }
        } else {
          day = "";
        }

        week.push(day);
      }
      arr.push(week);
    }

    setMonthCalendar(arr);
  }, [currentMonthYear]);

  const handleNavigateCalendar = (dir) => {
    switch (dir) {
      case "previous-year":
        setCurrentMonthYear({
          ...currentMonthYear,
          year: currentMonthYear.year - 1,
        });
        break;
      case "next-year":
        setCurrentMonthYear({
          ...currentMonthYear,
          year: currentMonthYear.year + 1,
        });
        break;
      case "previous-month":
        setCurrentMonthYear({
          ...currentMonthYear,
          month: currentMonthYear.month - 1,
        });
        break;
      case "next-month":
        setCurrentMonthYear({
          ...currentMonthYear,
          month: currentMonthYear.month + 1,
        });
        break;
    }
  };

  return (
    <div className="home">
      <div className="section upper-section">
        <div className="details">
          <div className="profile-pic"></div>
          <div className="emp-short-details">
            <p className="name">John Doe</p>
            <p className="position">Front End Developer</p>
            <p className="emp-num">EN-015</p>
          </div>
        </div>
        <div className="time-in-out">
          <button className="in">IN</button>
          <button className="out">OUT</button>
        </div>
      </div>
      <div className="section middle-section">
        <h3>Leave credits:</h3>
        <div className="tile-cont">
          <div className="tile">
            <h3>Vacation Leave</h3>
            <h4>0/5</h4>
          </div>
          <div className="tile">
            <h3>Emergency Leave</h3>
            <h4>0/5</h4>
          </div>
          <div className="tile">
            <h3>Sick Leave</h3>
            <h4>0/5</h4>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="section news-section">
          <h3>News:</h3>
          <ul className="news-list">
            {new Array(10).fill().map((item, key) => (
              <li key={key}>
                <div className="news-img"></div>
                <div className="news-desc">
                  <p className="title">{`News ${key}`}</p>
                  <p className="date">01/01/2023</p>
                  <p className="info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam ut optio esse dolor eligendi! Officia ea
                    reiciendis repellat blanditiis repudiandae enim aliquam
                    doloribus minima explicabo, unde officiis eum expedita
                    laudantium!
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="section calendar-section">
          <div className="calendar-header">
            <h3>{`${moment()
              .set(currentMonthYear)
              .format("MMMM YYYY")} Events`}</h3>
            <div className="calendar-navigation">
              <button
                onClick={() => handleNavigateCalendar("previous-year")}
              >{`<<`}</button>
              <button
                onClick={() => handleNavigateCalendar("previous-month")}
              >{`<`}</button>
              <button
                onClick={() => handleNavigateCalendar("next-month")}
              >{`>`}</button>
              <button
                onClick={() => handleNavigateCalendar("next-year")}
              >{`>>`}</button>
            </div>
          </div>
          <table className="calendar">
            <thead>
              <tr>
                {days.map((item) => (
                  <th key={item}>{item.substring(0, 3)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthCalendar.map((item, key) => (
                <tr key={key} className="weeks">
                  {item.map((n, k) => (
                    <td key={`day-${k}`} className="days">
                      {n !== "" && (
                        <>
                          <p>{n}</p>
                          <div className="day-events">
                            <div className="event">event</div>
                            <div className="event">event</div>
                          </div>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
