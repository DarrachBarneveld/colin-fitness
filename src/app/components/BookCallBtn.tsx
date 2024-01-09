import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa";

interface BookCallBtnProps {
  className: string;
}

const BookCallBtn: FunctionComponent<BookCallBtnProps> = ({ className }) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [show, toggle] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (show) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [show]);

  return (
    <>
      <button className={className} onClick={() => toggle(!show)}>
        Book an Appointment
        <span className="btn btn-icon bg-slate-600 hover:bg-slate-700 border-slate-600 hover:border-slate-700 text-white rounded-full ml-2">
          <FaPhone className="text-xl" />
        </span>
      </button>
      <dialog
        ref={ref}
        onClick={(e) => {
          if (!ref.current) {
            return;
          }

          const dialogDimensions = ref.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            ref.current.close();
            toggle(false);
          }
        }}
        className="h-full w-full md:w-1/2 rounded-lg shadow-md"
      >
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Z8nXXEjmcDHwKEie6KFeNLSy6nyAy-ITrW7XpUSHNff52QMTdyhOjf-eNMxsFjqgS7OvXq7B1?gv=true"
          width="100%"
          height="100%"
        ></iframe>
      </dialog>
    </>
  );
};

export default BookCallBtn;
