import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import sampleImage from "@/public/assets/images/01.jpg";
import { CgClose } from "react-icons/cg";
import { zoomOut } from "@/animations/variants";

interface ModalProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: FunctionComponent<ModalProps> = ({ openModal }) => {
  return (
    <div
      className="relative"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-20"
        onClick={() => openModal(false)}
      ></div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="fixed overflow-y-auto z-30 top-1/2 left-1/2"
      >
        <div className="relative transform overflow-hidden rounded-lg bg-white border shadow-xl transition-all sm:w-full sm:max-w-lg">
          <Image
            src={sampleImage}
            className="object-cover w-full min-w-[300px] aspect-square"
            alt="sample image"
          />
          <CgClose
            onClick={() => openModal(false)}
            className="text-2xl text-white absolute top-2 right-2 cursor-pointer hover:text-slate-200 focus:text-slate-200"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
