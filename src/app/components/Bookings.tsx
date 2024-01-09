"use client";

import { addDays } from "date-fns";
import { FunctionComponent, useState } from "react";
import BookCallBtn from "./BookCallBtn";

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
        <BookCallBtn className="flex items-center p-3 gap-2 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full align-middle" />
      </div>
    </section>
  );
};
export default Bookings;
