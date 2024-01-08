"use client";

import { addDays } from "date-fns";
import { FunctionComponent, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface BookingsProps {}

const Bookings: FunctionComponent<BookingsProps> = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="container p-8 mx-auto">
      {/* Testimonials */}
      <div className="text-center p-4">
        <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-slate-50">
          Bookings
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto">
          Push your fitness further with our mix of facilities and we&apos;ll
          support you with advice on new and better ways to train.
        </p>
      </div>
      <div className="flex justify-center items-center p-4">
        <DatePicker
          className="mx-auto"
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
          inline
        />
      </div>
    </section>
  );
};
export default Bookings;
