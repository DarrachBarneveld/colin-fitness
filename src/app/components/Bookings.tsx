"use client";

import { addDays } from "date-fns";
import { FunctionComponent, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface BookingsProps {}

const Bookings: FunctionComponent<BookingsProps> = () => {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
      excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      inline
    />
  );
};
export default Bookings;
