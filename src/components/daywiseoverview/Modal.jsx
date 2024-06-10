import { motion } from "framer-motion";

export const Modal = ({ className, children }) => {
  return (
    <motion.div
      className="cursor-default modal-container fixed z-[999] left-0 top-0 w-full h-full flex items-center justify-center bg-[rgba(0,_0,_0,_0.5)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="rounded-[5px] p-8 bg-white w-[clamp(50%,_700px,_90%)]"
      // drag
      // dragConstraints={{
      //   top: -50,
      //   left: -50,
      //   right: 50,
      //   bottom: 50,
      // }}
      >
        <div className={className}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
