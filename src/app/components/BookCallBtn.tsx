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
        <FaPhone />
        Book an Appointment
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
          }
        }}
        style={{
          width: "50%",
          height: "800px",
        }}
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
