import { motion } from "framer-motion";

export const Modal = ({ className, children }) => {
  return (
    <motion.div
      className="cursor-default modal-container fixed z-[999] left-0 top-0 w-full h-full flex items-end sm:items-center justify-center bg-[rgba(0,_0,_0,_0.5)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="rounded-[25px_25px_0px_0px] sm:rounded-[25px] bg-white w-full sm:w-[clamp(50%,_700px,_90%)] overflow-hidden"
      >
        <div className={className}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
