import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import Dropdown from "../Dropdown/Dropdown";

import { useCloseOutside } from "../Hooks/useCloseOutside";

import { getMonth, add0 } from "../../utils/calendarFuncs.utils";

import { BsChevronLeft, BsChevronRight, BsChevronDown } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

import "./DateRangePicker.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateRangePicker = () => {
  const [isClose, setIsClose] = useState(true);
  const [currentMonthData, setCurrentMonthData] = useState(getMonth());
  const [curMonth, setCurMonth] = useState(dayjs().month());
  const [curYear, setcurYear] = useState(dayjs().year());
  const [selecting, setSelecting] = useState(false);
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);

  const [openRef, menuRef] = useCloseOutside(isClose, setIsClose);

  const prevMonth = () => {
    if (curMonth === 0) {
      setCurrentMonthData(getMonth(curYear - 1, 11));
      setCurMonth(11);
      setcurYear(curYear - 1);
    } else {
      setCurrentMonthData(getMonth(curYear, curMonth - 1));
      setCurMonth(curMonth - 1);
    }
  };

  const nextMonth = () => {
    if (curMonth === 11) {
      setCurrentMonthData(getMonth(curYear + 1, 0));
      setCurMonth(0);
      setcurYear(curYear + 1);
    } else {
      setCurrentMonthData(getMonth(curYear, curMonth + 1));
      setCurMonth(curMonth + 1);
    }
  };

  const handleDateSelection = (day) => {
    if (selecting) {
      setLastDate(day);
      setSelecting(false);
    } else {
      if (lastDate) {
        setLastDate(null);
      }
      console.log(day);
      setFirstDate(day);
      setSelecting(true);
    }
  };

  useEffect(() => {
    setCurrentMonthData(getMonth());
  }, []);

  useEffect(() => {
    if (firstDate && lastDate) {
      if (firstDate.$d > lastDate.$d) {
        const temp = firstDate;
        setFirstDate(lastDate);
        setLastDate(temp);
      }
    }
  }, [selecting]);

  return (
    <div className="datepicker">
      <div
        ref={openRef}
        onClick={() => setIsClose(!isClose)}
        className="datepicker__select"
      >
        <div className="datepicker__select-dates">
          {firstDate ? (
            <p>
              {add0(firstDate.get("date"))}/{add0(firstDate.get("month") + 1)}/
              {firstDate.get("year")}
            </p>
          ) : (
            <p>-/-/--</p>
          )}
          <div className="divider">•</div>
          {lastDate ? (
            <p>
              {add0(lastDate.get("date"))}/{add0(lastDate.get("month") + 1)}/
              {lastDate.get("year")}
            </p>
          ) : (
            <p>-/-/--</p>
          )}
        </div>
        <i>
          <BiChevronDown />
        </i>
      </div>

      <Dropdown
        isClose={isClose}
        menuRef={menuRef}
        className="datepicker__calendar"
      >
        <div className="datepicker__calendar-header">
          <p>Date range</p>
          <div className="datepicker__calendar-header__select">
            <p>Custom</p>
            <i>
              <BsChevronDown />
            </i>
          </div>
        </div>

        <div className="datepicker__calendar-month__select">
          <i onClick={prevMonth}>
            <BsChevronLeft />
          </i>
          <p>
            {months[curMonth]} {curYear}
          </p>
          <i onClick={nextMonth}>
            <BsChevronRight />
          </i>
        </div>
        <div className="datepicker__calendar-dates">
          <p>Mo</p>
          <p>Tu</p>
          <p>We</p>
          <p>Th</p>
          <p>Fr</p>
          <p>Sa</p>
          <p>Su</p>
          {currentMonthData.map((week, wkId) => {
            return week.map((day, dyId) => {
              return (
                <button
                  className={`${curMonth === day.month() && "active-month"}   ${
                    ((firstDate?.$d <= day && lastDate?.$d >= day.$d) ||
                      day === firstDate) &&
                    "selected"
                  } ${day === firstDate && lastDate && "first-selected"}
                  ${day === lastDate && "last-selected"}
                  ${day.day() === 1 && lastDate && "isMo-and-selected"}
                  ${day.day() === 0 && lastDate && "isSu-and-selected"}`}
                  key={`${wkId}-${dyId}`}
                  onClick={() => handleDateSelection(day)}
                >
                  {day.$D}
                </button>
              );
            });
          })}
        </div>
        <div className="datepicker__btns">
          <button>Cancel</button>
          <button>Apply</button>
        </div>
      </Dropdown>
    </div>
  );
};

export default DateRangePicker;
