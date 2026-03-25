import React from 'react'
import { useState } from "react";
export function Formelement({ label, placeholder, onChange, value, name, error }) {



  return (
    <div className="relative flex flex-col gap-2.5 w-full lg:w-105.5 md:w-100 sm:w-78.75">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full lg:w-105.5 h-12.5 border border-gray-300 rounded-sm px-3 pt-5 pb-2 text-gray-700  focus:outline-none focus:ring-1   ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-100"}`}
      />
      <label
        htmlFor={name}
        className={` bg-white absolute mt-9 left-3 top-2.5 duration-100 peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-sm peer-focus:mt-3 peer-not-placeholder-shown:top-2.5  peer-not-placeholder-shown:mt-3  ${error && value !== "" ? "text-red-500" : "text-gray-500"}`}
      >
        {label}
        <span className="text-red-500">*</span>
      </label>
    </div>
  );
}






export function Birthday({ label, day, month, year, onChange, errors, }) {
  const [isFocusedDay, setIsFocusedDay] = useState(false);
  const [isFocusedMonth, setIsFocusedMonth] = useState(false);
  const [isFocusedYear, setIsFocusedYear] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  return (<>
    <label className="flex felx-col gap-1.75 text-gray-700 font-medium">{label}</label>
    <div className="flex flex-wrap gap-4">

      {/* Floating label */}
      <div className="relative flex flex-1">
        {/* Label */}
        {!isFocusedDay && !day && (
          <label
            // htmlFor="day"
            className={`absolute bg-white left-3 top-3 mt-0.5 pb-0.5 pr-1 text-gray-600 text-sm pointer-events-none 
           `}
          >
            Day <span className="text-red-500">*</span>
          </label>
        )}

        {/* Select */}
        <select
          name="day"
          id="day"
          value={day}
          onChange={onChange}
          required
          onFocus={() => setIsFocusedDay(true)}
          onBlur={() => setIsFocusedDay(false)}
          className={`peer flex-1 min-w-15 h-12 rounded-sm border px-3 pt-2 pb-2  
          ${errors?.day ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-300"}
        `}
        >
          <option value="" >
            Day
          </option>
          {days.map((d) => (
            <option key={d} value={d} >
              {d}
            </option>
          ))}
        </select>
      </div>





      <div className="relative flex flex-1">
        {/* Label */}
        {!isFocusedMonth && !month && (
          <label
            // htmlFor="day"
            className={`absolute bg-white left-3 top-3 mt-0.5 pb-0.5 text-gray-600 text-sm pointer-events-none 
           `}
          >
            Month <span className="text-red-500">*</span>
          </label>
        )}

        {/* Select */}
        <select
          name="month"
          id="month"
          value={month}
          onChange={onChange}
          required
          onFocus={() => setIsFocusedMonth(true)}
          onBlur={() => setIsFocusedMonth(false)}
          className={`peer flex-1 min-w-15 h-12 rounded-sm border px-3 pt-2 pb-2  
          ${errors?.month ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-300"}
        `}
        >
          <option value="">
            month
          </option>
          {months.map((d) => (
            <option key={d} value={d} >
              {d}
            </option>
          ))}
        </select>
      </div>



      <div className="relative flex flex-1">
        {!isFocusedYear && !year && (
          <label
            // htmlFor="day"
            className={`absolute bg-white left-3 top-3 mt-0.5 pb-0.5 text-gray-600 text-sm pointer-events-none 
           `}
          >
            Year <span className="text-red-500">*</span>
          </label>
        )}


        <select
          name="year"
          id="year"
          value={year}
          onChange={onChange}
          // onClick={}
          onFocus={() => setIsFocusedYear(true)}
          onBlur={() => setIsFocusedYear(false)}
          className={`peer flex-1 min-w-15 h-12 rounded-sm border px-3 pt-2 pb-2  
          ${errors?.year ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-300"}
        `}
        >
          <option value="">
            year
          </option>
          {years.map((d) => (
            <option key={d} value={d} >
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  </>
  )
}



